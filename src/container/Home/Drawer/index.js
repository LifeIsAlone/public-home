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
        background: #fffa;
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
                {state.length > 0 &&
                    state.map((home) => (
                        <ContentsBox>
                            {Object.values(home).map((x) => (
                                <p>{x}</p>
                            ))}
                        </ContentsBox>
                    ))}
            </DrawerContents>
        </DrawerContainer>
    );
};

export default Drawer;
