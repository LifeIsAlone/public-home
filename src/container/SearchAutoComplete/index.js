import React from 'react';
import styled from 'styled-components';
import SearchAutoCompleteItem from './SearchAutoCompleteItem';

const MockItem = [
    { id: 1, address1: '대구 중구 동덕로 1', address2: '대구 중구 동덕로 1' },
    { id: 2, address1: '대구 중구 동덕로 1', address2: '대구 중구 동덕로 1' },
    { id: 3, address1: '대구 중구 동덕로 1', address2: '대구 중구 동덕로 1' },
    { id: 4, address1: '대구 중구 동덕로 1', address2: '대구 중구 동덕로 1' },
    { id: 5, address1: '대구 중구 동덕로 1', address2: '대구 중구 동덕로 1' },
    { id: 6, address1: '대구 중구 동덕로 1', address2: '대구 중구 동덕로 1' },
    { id: 7, address1: '대구 중구 동덕로 1', address2: '대구 중구 동덕로 1' },
    { id: 8, address1: '대구 중구 동덕로 1', address2: '대구 중구 동덕로 1' },
    { id: 9, address1: '대구 중구 동덕로 1', address2: '대구 중구 동덕로 1' },
];

function SearchAutoComplete() {
    return (
        <Container>
            {MockItem.map((item) => (
                <SearchAutoCompleteItem
                    key={item.id}
                    title={item.address1}
                    sub={item.address2}
                />
            ))}
        </Container>
    );
}

const Container = styled.div`
    width: 340px;
    height: 410px;
    position: absolute;
    top: 67px;
    left: 24px;

    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    padding: 45px 24px;
    z-index: 999998;
    overflow: auto;
`;

export default SearchAutoComplete;
