import React, { useState } from 'react';
import LeftSideDrawerBox from './LeftSideDrawerBox';
import Search from './Search';
import SearchAutoComplete from './SearchAutoComplete';

function Drawer({
    opening,
    handleDrawerOpening,
    searchText,
    handleSearchText,
    data,
}) {
    return (
        <>
            <LeftSideDrawerBox
                opening={opening}
                handleDrawerOpening={handleDrawerOpening}
            />
            <Search
                searchText={searchText}
                handleSearchText={handleSearchText}
            />
            <SearchAutoComplete searchText={searchText} data={data} />
        </>
    );
}

export default Drawer;
