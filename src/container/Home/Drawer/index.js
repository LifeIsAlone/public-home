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
        width: 34rem;
        height: 100vh;
        top: 0;
        right: ${hide ? '0' : '-30rem'};
    `;
    const DrawerEventBox = styled.div`
        position: fixed;
        display: flex;
        flex-flow: row;
        width: 2em;
        height: 100vh;
        top: 0;
        right: ${hide ? '34rem' : '0'};
        background-image: url(${hide ? drawerOpenIcon : drawerCloseIcon});
        background-repeat: no-repeat;
        
        background-position: center;
    `;
    const DrawerContents = styled.div`
        width: 90em;
        padding: 3em;
        background: #ffffff;
    `;
    const ContentsBox = styled.div`
        margin: 1em;
        background: #fffa;
        height: 10em;
        border: 1px grey solid;
    `;
    return (
        <>
            <DrawerEventBox onClick={onToggleClick} />
            {hide && <DrawerContainer>
                <DrawerContents>
                    {state.name}
                    {<p>임대조건(2,3순위 청년 기준, 보증금 최대전환 시)</p>}
                    {state.sells &&
                        state.sells.map((home) => (
                            <>
                                <ul>
                                    <li>주택정보: {home.classes} </li>
                                    <li>보증금: {home.totalPrice}</li>
                                    <li>임대료: {home.monthPay}</li>
                                </ul>
                            </>
                            
                            // <ContentsBox>
                            //     {Object.values(home).map((item) => (
                            //         <>
                            //             <p>{item}</p>
                                        
                            //         </>
                            //         // <p>{x}</p>
                            //     ))}
                            // </ContentsBox>
                        ))}
                </DrawerContents>
            </DrawerContainer>}
        </>
    );
};

export default Drawer;
