import React, { useContext } from 'react';
import { NaverMapContext } from '../components/NaverMap';

/**
 *
 * @param {position} param lat lng
 */
const setMapCenter = ({ position }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const naverMap = useContext(NaverMapContext);
    if (!naverMap) {
        throw new Error(`must exist inside Map Component!`);
    }

    const [lat, lng] = position;
    naverMap.panToBounds(
        new naver.maps.LatLng(lat - 0.003, lng - 0.01),
        new naver.maps(),
        LatLng(lat + 0.003, lng + 0.01),
    );
};
export default setMapCenter;
