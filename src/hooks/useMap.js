import React, { useContext } from 'react';
import { NaverMapContext } from '../components/NaverMap';

function useMap(componentName) {
    const naverMap = useContext(NaverMapContext);
    if (!naverMap) {
        new Error(
            `${
                componentName ? componentName + ' Component' : 'useMap'
            } must exist inside Map Component!`,
        );
    }

    return naverMap;
}

export default useMap;
