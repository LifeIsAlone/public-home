import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';

const Drawer = ({ state, hide, onToggleClick }) => {
    const theme = useTheme();

    const drawerOpenIcon = 'https://i.ibb.co/k5qPgfM/725-D4685-A361-4-A36-BE98-14-D3-B2-D3-A369-4-5005-c.jpg';
    const drawerCloseIcon = 'https://i.ibb.co/858qKcX/AB15-B4-AB-1-EE9-4597-800-B-965-F7-D1460-D7-4-5005-c.jpg';
    const DrawerContainer = styled.div`
        position: fixed;
        display: flex;
        flex-flow: row;
        width: 24rem;
        height: 100vh;
        background: #ffffff;
        top: 0;
        right: ${hide ? '0' : '-30rem'};
    `;
    const DrawerEventBox = styled.div`
        position: fixed;
        display: flex;
        flex-flow: row;
        width: 2rem;
        height: 100vh;
        top: 0;
        right: ${hide ? '24rem' : '0'};
        background-image: url(${hide ? drawerOpenIcon : drawerCloseIcon});
        background-repeat: no-repeat;
        background-position: center;
    `;
    const DrawerContents = styled.div`
        width: 24rem;
        height: 100vh;
        padding-left: 2rem;
        background: #ffffff;
        li {
            padding: 0.3em;
        }
        p#eof{
            text-align: center;
        }
    `;
    const ContentsBox = styled.div`
        margin: 1em;
        background: #fffa;
        height: 10em;
        border: 1px grey solid;
    `;

    const InfoWindowScroll = styled.div`
        overflow: auto;
        height: 100vh;
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
    return (
        <>
            <DrawerEventBox onClick={onToggleClick} />
            {hide && <DrawerContainer>
                <DrawerContents>
                    <InfoWindowScroll>
                        <>
                        <br/>
                        <h2><b>[LH 청년매입] {state.name}</b></h2>
                        <br/>
                        <p>- 주소 : {state.address.split("(")[0]}</p>
                        <br/>
                        <p>- 승강기 유무 : {state.elevator==="Y"? "있음" : state.elevator==="N"? "없음": "알수없음"}</p>
                        <br/>
                        <p>- 임대조건 (2,3순위 청년 기준, 보증금 최대전환 시)</p>
                        <br/>
                        <br/>
                        {state.sells &&
                            state.sells.map((home) => (
                                <>
                                    <ul>
                                        <li>* 주택정보: {home.classes} </li>
                                        <li>* 방수: {home.roomCount} </li>
                                        <li>* 보증금: {home.totalPrice} </li>
                                        <li>* 임대료: {home.monthPay} </li>
                                    </ul>
                                    <br/>
                                </>
                            ))
                        }
                        </>
                        <p id="eof">이하 빈칸</p>
                    </InfoWindowScroll>
                </DrawerContents>
            </DrawerContainer>}
        </>
    );
};

export default Drawer;
