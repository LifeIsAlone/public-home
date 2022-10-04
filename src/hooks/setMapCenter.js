import React, { useContext } from 'react';
import { NaverMapContext } from '../components/NaverMap';

/**
 *
 * @param {lat lng} position
 */
function setMapCenterFn() {
    const naverMap = useContext(NaverMapContext);
    if (!naverMap) {
        throw new Error(`must exist inside Map Component!`);
    }
    return ({ lat, lng }) => {
        if (!window) return null;
        if (!naverMap) throw new Error(`must exist inside Map Component!`);

        const position = new naver.maps.LatLngBounds(
            new naver.maps.LatLng(Number(lat) - 0.03, Number(lng) - 0.01),
            new naver.maps.LatLng(Number(lat) + 0.03, Number(lng) + 0.01),
        );

        naverMap.panToBounds(position);
    };
}

export default setMapCenterFn;
