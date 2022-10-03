/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import NaverMap from '../components/NaverMap';
import Header from '../container/Home/Header';
import HomeMarker from '../container/Home/HomeMarker';
import { getSpreadSheetData } from '../libs/sheets';
import { useMemo, useState } from 'react';
import Drawer from '../container/Home/Drawer';

const convertToNumber = (string) => {
    return parseInt(string.replace(/(,|개|원)/g, ''));
};

const addCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const getAddress = (addr) => {
    const re =
        /(([가-힣A-Za-z·\d~\-\.]{2,}(로|길).[\d|-\d]+)|([가-힣A-Za-z·\d~\-\.]+(읍|동)\s)[\d]+)/;
    return re.exec(addr)[0];
};

const preprocessingLH = (datas) => {
    const homesList = datas.map((homeObject) => ({
        lat: homeObject.lat,
        lng: homeObject.lng,
        keyCoords: `${homeObject.lat} ${homeObject.lng}`,
        address: homeObject['주소'],
        name: homeObject['주택군 이름'],
        classes:
            homeObject['성별용도 구분'] +
            ' ' +
            (homeObject['동'] ? homeObject['동'] + '동 ' : '') +
            homeObject['호'] +
            '호 ' +
            Number(homeObject['전용면적']) +
            '㎡',
        roomCount: homeObject['방수'] + '개',
        elevator: homeObject['승강기'],
        totalPrice:
            addCommas(convertToNumber(homeObject['임대보증금(원)']) / 10000) +
            '만원',
        monthPay: homeObject['월임대료(원)'].trim() + '원',
    }));

    const homesCoordsList = homesList.map(({ keyCoords }) => keyCoords);

    const homesCoordsSetify = Array.from(new Set(homesCoordsList));

    const homesReuslt = homesCoordsSetify.map((keyCoords) => {
        return { keyCoords, sells: [] };
    });

    homesList.forEach(
        ({
            lng,
            lat,
            keyCoords,
            address,
            classes,
            monthPay,
            name,
            totalPrice,
            roomCount,
            elevator,
        }) => {
            const Obj = homesReuslt.filter((e) => e.keyCoords === keyCoords)[0];
            Obj.gov = 'LH 청년매입';
            Obj.name = name;
            Obj.address = address;
            Obj.lat = lat;
            Obj.lng = lng;
            Obj.elevator = elevator;
            Obj.sells.push({ classes, roomCount, totalPrice, monthPay });
        },
    );
    return homesReuslt;
};

export default function Home({ spreadSheetData }) {
    const [homes, setHomes] = useState([]);
    const [hide, setHide] = useState(false);
    const HomeBucket = useMemo(() => {
        return Object.values(preprocessingLH(spreadSheetData));
    }, []);
    const handleDrawerHide = () => setHide(true);
    const handleDrawerEvent = () => setHide((f) => !f);
    const handleDataSet = (data) => setHomes(data);
    const handlers = (data) => {
        handleDataSet(data);
        handleDrawerHide();
    };
    return (
        <div>
            <Head>
                <title>청년주택 지도</title>
                <meta name="description" content="청년주택 지도" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                strategy="beforeInteractive"
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
            ></Script>
            <main>
                <NaverMap>
                    <Header />
                    <Drawer
                        state={homes}
                        hide={hide}
                        onToggleClick={handleDrawerEvent}
                    />
                    {HomeBucket.map((data) => {
                        return (
                            <HomeMarker
                                key={`key_${data.lat}${data.lng}`}
                                data={data}
                                onMarkerClick={handlers}
                            />
                        );
                    })}
                </NaverMap>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const response = await getSpreadSheetData();
    return {
        props: {
            spreadSheetData: response,
        },
    };
}
