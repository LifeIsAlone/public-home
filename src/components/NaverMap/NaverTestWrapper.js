import React, { useEffect, useState } from 'react';
import useScript from '../../hooks/useScript';

const NaverTestWrapper = (props) => {
    const [render, setRender] = useState(false);

    useScript(
        `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`,
        () => setRender(true),
    );

    return <div id={render ? 'have' : 'remove'}>{props.children}</div>;
};

export default NaverTestWrapper;
