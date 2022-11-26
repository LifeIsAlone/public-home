import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../../assets/SearchIcon';

function Search() {
    const [searchText, setSearchText] = useState();
    return (
        <Container>
            <Input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <BtnContainer
                onClick={(e) => {
                    e.preventDefault();
                    alert('test');
                }}
            >
                <SearchIcon />
            </BtnContainer>
        </Container>
    );
}
const Container = styled.div`
    position: absolute;
    width: 340px;
    height: 46px;
    left: 136px;
    top: 27px;
    z-index: 999999;
    background: #ffffff;
    border: 1px solid #5f59ef;
    border-radius: 2px;

    display: flex;
    flex-direction: row;
`;

const Input = styled.input`
    width: 294px;
    border: 0px;
    outline: none;
    margin: 12px 13px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
`;
const BtnContainer = styled.button`
    width: 46px;
    height: 46px;
    background: transparent;
    border: 0px;
`;

export default Search;
