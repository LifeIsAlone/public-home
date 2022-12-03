import React, { useContext } from 'react';
import { NaverMapContext } from '../components/NaverMap';

/**
 * 원하는 좌표로 이동합니다. 스무스하게
 *
 * @param {lat lng} position
 */
function useMapCenter() {
    const naverMap = useContext(NaverMapContext);
    if (!naverMap) {
        throw new Error(`must exist inside Map Component!`);
    }
    const setMapCenter = ({ lat, lng }) => {
        if (!window) return null;
        if (!naverMap) throw new Error(`must exist inside Map Component!`);

        const position = new naver.maps.LatLngBounds(
            new naver.maps.LatLng(Number(lat) - 0.03, Number(lng) - 0.01),
            new naver.maps.LatLng(Number(lat) + 0.03, Number(lng) + 0.01),
        );

        naverMap.panToBounds(position);
    };
    return { setMapCenter };
}

export default useMapCenter;
