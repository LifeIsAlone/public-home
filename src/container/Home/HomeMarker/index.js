import React, { useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import Marker from '../../../components/NaverMap/Marker';

//data Property
/* {
    '순번': '265',
    '지역본부': '서울지역본부',
    '지역': '경기도',
    '명': '매입다가구(경기양주시)',
    '주소': '경기도 양주시 덕정14길 23(덕정동) 자이빌',
    '동': '102',
    '호': '101',
    '주택군 이름': '양주덕정동(자이빌)',
    '주택열람일정': '열람불가(계약 전 주택 개방)',
    '공급형': '단독(1인)',
    '성별용도 구분': '남여공용',
    '전용\n 면적': '43.72',
    '주거공용\n 면적': '11.87',
    '면적계': '55.59',
    '방수': '2',
    '층수': '1층',
    '승강기': 'Y',
    '주택유형': '오피스텔',
    '임대보증금(원)': '31,100,000',
    '월임대료(원)': '97,760',
    lng: '127.0665710',
    lat: '37.8419812'
  }
*/

function HomeMarker({ data, onMarkerClick }) {
    const theme = useTheme();

    const SummaryInfoContainer = styled.div`
        background: white;
        display: flex;
        overflow: hidden;
    `;
    const SummaryInfoIcon = styled.div``;

    const SummaryInfoContents = styled.div`
        display: flex;
        padding: 1rem 1rem;
        flex-flow: column nowrap;
        font-size: ${theme.fontSizes.md};
        h3 {
            font-size: ${theme.fontSizes.xl};
            font-weight: 600;
        }
    `;
    return (
        <Marker
            position={{
                lat: data.lat,
                lng: data.lng,
            }}
            onClick={() => onMarkerClick(data)}
        >
            <SummaryInfoContainer>
                <SummaryInfoIcon />
                <SummaryInfoContents>
                    <h3>{data.name}</h3>
                </SummaryInfoContents>
            </SummaryInfoContainer>
        </Marker>
    );
}

export default HomeMarker;
