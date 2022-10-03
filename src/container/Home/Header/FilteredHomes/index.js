/* eslint-disable react/jsx-key */

<<<<<<< HEAD
import React from 'react';
import Items from './Items';
import styled from 'styled-components';

export default function FilteredHomes({ homesData }) {
    return (
        <CustomUl>
            {homesData.map((item) => (
=======
import React, { useRef } from 'react';
import { useHomesState } from './../../../../provider/HomeContext';
import Items from './Items';
import styled from 'styled-components';

export default function FilteredHomes() {
    const scroll = useRef(null);
    const state = useHomesState();
    return (
        <CustomUl ref={scroll}>
            {state.filteredHomes.map((item) => (
>>>>>>> dev
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
