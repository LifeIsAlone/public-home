import React from 'react';
import styled from 'styled-components';

function Header2(props) {
    return (
        <Container>
            <SearchArea />
            <ContentsArea />
        </Container>
    );
}

const Container = styled.div`
    width: 390px;
    height: 100%;
    position: absolute;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    z-index: 999;
`;
const SearchArea = styled.div`
    height: 122px;
    background: transparent;
`;
const ContentsArea = styled.div`
    width: 390px;
    height: 100%;

    background: #fafafa;
`;
export default Header2;
