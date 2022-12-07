import React from 'react';
import styled from 'styled-components';

function Navigator() {
    return (
        <Container>
            <Top />
            <Router>
                <li>메인 페이지</li>
            </Router>
            <Bottom />
        </Container>
    );
}
const Container = styled.header`
    z-index: 100000;
    box-sizing: border-box;
    background: white;
    position: absolute;
    width: 112px;
    height: 100%;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: column;
    padding: 12px;
`;
const Top = styled.div`
    flex: 1;
`;
const Router = styled.ul`
    flex: 4;
    decoration: none;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    text-align: right;
    color: #8e8e93;
`;
const Bottom = styled.div`
    flex: 1;
`;

export default Navigator;
