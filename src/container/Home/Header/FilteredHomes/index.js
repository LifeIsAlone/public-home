/* eslint-disable react/jsx-key */

import React from 'react';
import Items from './Items';
import styled from 'styled-components';

export default function FilteredHomes({ homesData }) {
    return (
        <CustomUl>
            {homesData.map((item) => (
                <Items item={item} />
            ))}
        </CustomUl>
    );
}

const CustomUl = styled.ul`
    overflow: auto;
    max-height: 88vh;
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        height: 30%;
        background: #217af4;

        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(33, 122, 244, 0.1);
    }
`;
