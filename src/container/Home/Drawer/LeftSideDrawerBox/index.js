import React, { useEffect } from 'react';
import styled from 'styled-components';
import Open from '../../../../assets/Open';

function LeftSideDrawerBox({ homes, opening, handleDrawerClosing }) {
    useEffect(() => {
        console.log(homes);
    }, [homes]);

    return (
        <Container className={opening ? '__open' : '__close'}>
            <SearchArea />
            <ContentsArea>
                <nav style={{ height: 39, width: '100%', background: 'grey' }}>
                    nav
                </nav>
                <section>
                    <header>
                        <h2>{homes.name}</h2>
                        <h4>{homes.address}</h4>
                        <tag>{homes.gov}</tag>
                        {homes.elevator && <tag>엘리베이터 있음</tag>}
                    </header>
                    <article>
                        <h2>매물</h2>
                    </article>
                </section>
            </ContentsArea>
            <TriggerBtn onClick={() => handleDrawerClosing()}>
                <Open />
            </TriggerBtn>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    width: 390px;
    height: 100%;
    left: 112px;
    top: 0px;
    height: calc(100% - 122px);
    position: absolute;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    z-index: 99999;
    transition: 0.8s left ease;
    &.__open {
        left: 112px;
    }
    &.__close {
        left: -390px;
    }
`;
const SearchArea = styled.div`
    height: 122px;
    background: transparent;
`;
const ContentsArea = styled.div`
    width: 390px;
    height: 100%;

    background: #fafafa;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: #8e8e93;
        border-radius: 100px;
    }
`;

const TriggerBtn = styled.button`
    box-sizing: border-box;
    position: absolute;
    border: 0px;
    width: 23px;
    height: 50px;
    left: 390px;
    top: 562px;
    background: white;
    box-shadow: 1.5px 0.5px 0.2px rgba(0, 0, 0, 0.3);
`;
export default LeftSideDrawerBox;
