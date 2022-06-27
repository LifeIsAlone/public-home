import { useState, useEffect } from "react";
import { createMap, getPosition } from "../../helpers/naverMapHelper";

export function NaverMap({ mapDivId, style, defaultCenter, defaultZoom, mapState, children }) {

    const [map, setMap] = useState(undefined);
    const [isRender, setIsRender] = useState(false);

    useEffect(() => {
        return () => {
            setIsRender(true);
        }
    }, [])

    useEffect(() => {
        const { lat, lng } = defaultCenter;
        const nMap = createMap(mapDivId, getPosition(lat, lng), defaultZoom);
        console.log(nMap)
        setMap(nMap);
        mapState(nMap);
    }, [isRender])
    return (
        <>
            <div style={style} id={mapDivId}></div>
            {children}
        </>
    )

}