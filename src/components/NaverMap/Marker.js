import React, { forwardRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';

const CreateMarker = (props, ref) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const map = useMap();

    useEffect(() => {
        if (!map) return;
        const marker = new naver.maps.Marker({
            map: map,
            position: new naver.maps.LatLng(
                props.position.lat,
                props.position.lng,
            ),
        });
    }, [map]);

    return <div ref={ref} className="Marker"></div>;
};

const Marker = forwardRef(CreateMarker);

Marker.defaultProps = {
    position: { lat: 37.5666805, lng: 126.9784147 },
};
export default Marker;
