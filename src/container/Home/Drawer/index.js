import React, { useState } from 'react';
import LeftSideDrawerBox from './LeftSideDrawerBox';
import Search from './Search';
import SearchAutoComplete from './SearchAutoComplete';

function Drawer({
    opening,
    handleDrawerClosing,
    searchText,
    handleSearchText,
    data,
    homes,
}) {
    return (
        <>
            <LeftSideDrawerBox
                opening={opening}
                handleDrawerClosing={handleDrawerClosing}
                homes={homes}
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
