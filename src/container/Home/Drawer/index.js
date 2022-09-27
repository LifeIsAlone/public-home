import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';

const Drawer = ({ state }) => {
    const theme = useTheme();
    const [hide, setHide] = useState(false);
    useEffect(() => {
        setHide(true);
    }, [state]);

    const DrawerContainer = styled.div`
        position: fixed;
        display: flex;
        flex-flow: row;
        width: 34rem;
        height: 99vh;
        top: 0;
        right: ${hide ? '0' : '-30rem'};
    `;
    const DrawerEventBox = styled.div`
        width: 10em;
        background: #000;
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
        <DrawerContainer>
            <DrawerEventBox onClick={() => setHide((f) => !f)} />
            <DrawerContents>
                {state.name}
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
        </DrawerContainer>
    );
};

export default Drawer;
