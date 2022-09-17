import React, { forwardRef, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import useMap from '../../hooks/useMap';

/**
 * Author: ParkAward
 * createAt: 2022.09.17
 * res: https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html
 *
 */

const CreateMarker = (props, ref) => {
    const map = useMap();
    useEffect(() => {
        if (!map) return;
        if (!props.position) throw new Error('좌표를 입력해주세요');
        const marker = new naver.maps.Marker({
            map: map,
            position: new naver.maps.LatLng(
                props.position.lat,
                props.position.lng,
            ),
        });
        if (props.children) {
            const infowindow = new naver.maps.InfoWindow({
                content: ReactDOMServer.renderToStaticMarkup(props.children),
            });

            naver.maps.Event.addListener(marker, 'click', (e) => {
                if (infowindow.getMap()) {
                    infowindow.close();
                } else {
                    infowindow.open(map, marker);
                }
            });
        }
    }, [map]);
};

const Marker = forwardRef(CreateMarker);

Marker.defaultProps = {
    position: { lat: 37.5666805, lng: 126.9784147 },
};
export default Marker;
