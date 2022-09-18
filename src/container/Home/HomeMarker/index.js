import React from 'react';
import styled from 'styled-components';
import Marker from '../../../components/NaverMap/Marker';

function HomeMarker({ position, homeInfo, children }) {
    return (
        <Marker position={position}>
            <InfoWindowDiv>
                <InfoWindowScroll>
                    <div>
                        <span class="notranslate">
                            <h3>
                                [{homeInfo.gov}] {homeInfo.name}
                            </h3>
                            <p>
                                임대조건(2,3순위 청년 기준, 보증금 최대전환 시)
                            </p>
                            {children}
                        </span>
                    </div>
                </InfoWindowScroll>
            </InfoWindowDiv>
        </Marker>
    );
}

const InfoWindowDiv = styled.div`
    width: 350px;
    text-align: left;
    padding: 10px;
`;

const InfoWindowScroll = styled.div`
    display: flex;
    overflow: auto;
    height: 30vh;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;

HomeMarker.defaultProps = {
    position: { lat: 37.5666805, lng: 126.9784147 },
    homeInfo: {
        gov: 'test',
        name: 'testName',
    },
    sells: [{ classes: 1, totalPrice: 2, monthPay: 3 }],
};

export default HomeMarker;
