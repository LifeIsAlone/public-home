import React, { createContext, forwardRef, useEffect, useState } from 'react';
import { loadNMaps } from '../../utils/naverMapHelper';

export const NaverMapContext = createContext(null);

/**@Todo Suspense를 활용해 JsonData, NaverMap의 로딩 제작하기(다른방법 OK) */
/**이유: 10/1의 확률로 NaverMap이 로딩이 안됨 */

const NaverMap = forwardRef((props, ref) => {
    const [map, setMap] = useState(null);
    const [renderAfter, setRenderAfter] = useState(false);
    useEffect(() => () => loadNMaps(setRenderAfter(true)), []);
    useEffect(() => {
        if (renderAfter && window) {
            const mapOptions = {
                center: new naver.maps.LatLng(
                    props.center.lat,
                    props.center.lng,
                ),
                zoom: props.zoom,
            };
            const map = new naver.maps.Map(props.id, mapOptions);
            setMap(map);
        }
    }, [renderAfter, window]);
    return (
        <>
            <div
                ref={ref}
                id={props.id}
                style={{ width: props.width, height: props.height }}
            ></div>
            <NaverMapContext.Provider value={map}>
                {props.children}
            </NaverMapContext.Provider>
        </>
    );
});

NaverMap.defaultProps = {
    id: 'map',
    center: { lat: 37.3595704, lng: 127.105399 },
    zoom: 10,
    width: '100vw',
    height: '100vh',
};

export default NaverMap;
