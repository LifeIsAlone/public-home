import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createFuzzyMatcher } from '../../../../utils/fuzzyMatcher';
import SearchAutoCompleteItem from './SearchAutoCompleteItem';

function SearchAutoComplete({ searchText, data }) {
    const [autoComplete, setAutoComplete] = useState([]);
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        if (searchText) {
            setVisibility(true);
            setAutoComplete(
                data.filter((x) =>
                    x.address.match(createFuzzyMatcher(searchText)),
                ),
            );
        }
        if (searchText === '') {
            setVisibility(false);
            setAutoComplete([]);
        }
    }, [searchText, visibility]);

    return (
        <Container className={visibility ? '__find' : '__hide'}>
            {autoComplete.map((item) => (
                <SearchAutoCompleteItem
                    key={`${item.lat} ${item.lng}`}
                    title={item.address}
                    sub={item.name}
                />
            ))}
        </Container>
    );
}

const Container = styled.ul`
    width: 340px;
    position: absolute;
    left: 136px;
    top: 67px;
    max-height: 410px;

    background: white;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    z-index: 999998;
    overflow: auto;
    __hide: {
        height: 0px;
    }

    __find: {
        height: 410px;
    }
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: #8e8e93;
        border-radius: 100px;
    }
`;

export default SearchAutoComplete;
