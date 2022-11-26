import React, { useState } from 'react';
import LeftSideDrawerBox from './LeftSideDrawerBox';
import Search from './Search';
import SearchAutoComplete from './SearchAutoComplete';

function Drawer() {
    const [opening, setOpening] = useState(true);
    return (
        <>
            <LeftSideDrawerBox opening={opening} setOpening={setOpening} />
            <Search />
            <SearchAutoComplete />
        </>
    );
}

export default Drawer;
