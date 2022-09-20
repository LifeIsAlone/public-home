import React, { forwardRef, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import useMap from '../../hooks/useMap';

/**
 * Author: ParkAward
 * createAt: 2022.09.17
 * res: https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html
 *
 * @param {*} props {
 *  Required: position:{lat: Number, lng: Number}
 *  style : Marker StyleProps
 *  children
 * }
 * @param {*} ref return Marker Obj
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
            // {...props.style} but can't use
            icon: {
                url: 'https://i.ibb.co/cL3pwtk/homeSH.png',
                scaledSize: new naver.maps.Size(20, 20),
            },
        });
        if (props.children) {
            const infowindow = new naver.maps.InfoWindow({
                content: ReactDOMServer.renderToStaticMarkup(props.children),
                borderWidth: 0,
                disableAnchor: true,
                backgroundColor: 'translate',
                pixelOffset: new naver.maps.Point(0, 100),
            });

            naver.maps.Event.addListener(marker, 'mouseover', (e) => {
                console.log(infowindow);
                console.log(infowindow.contentElement);
                infowindow.open(map, marker);
            });
            infowindow.contentElement.addEventListener('mouseout', () =>
                infowindow.close(),
            );
            infowindow.contentElement.addEventListener('click', props.onClick);
        }
    }, [map]);
};

const Marker = forwardRef(CreateMarker);

Marker.defaultProps = {
    position: { lat: 37.5666805, lng: 126.9784147 },
};
export default Marker;
