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

export default function Home({ spreadSheetData }) {
    const [homes, setHomes] = useState([]);
    const HomeBucket = useMemo(() => {
        const home = {};
        for (const data of spreadSheetData) {
            if (home[`${data.lat} ${data.lng}`] === undefined)
                home[`${data.lat} ${data.lng}`] = {
                    lat: data.lat,
                    lng: data.lng,
                    주소: data['주소'],
                    주택유형: data['주택유형'],
                    승강기: data['승강기'],
                    '주택군 이름': data['주택군 이름'],
                    homes: [
                        {
                            방수: data['방수'],
                            전용면적: data['전용\n 면적'],
                            공용면적: data['주거공용\n 면적'],
                            면적계: data['면적계'],
                            '성별용도 구분': data['성별용도 구분'],
                            '월임대료(원)': data['월임대료(원)'],
                            '임대보증금(원)': data['임대보증금(원)'],
                        },
                    ],
                };
            else {
                home[`${data.lat} ${data.lng}`].homes.push({
                    방수: data['방수'],
                    전용면적: data['전용\n 면적'],
                    공용면적: data['주거공용\n 면적'],
                    면적계: data['면적계'],
                    '성별용도 구분': data['성별용도 구분'],
                    '월임대료(원)': data['월임대료(원)'],
                    '임대보증금(원)': data['임대보증금(원)'],
                });
            }
        }
        return Object.values(home);
    }, []);

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
                    <Drawer state={homes} />
                    {HomeBucket.map((data) => {
                        return (
                            <HomeMarker
                                key={`key_${data.lat}${data.lng}`}
                                data={data}
                                callback={(data) => setHomes(data)}
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
