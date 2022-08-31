import React, { createContext, forwardRef, useEffect, useState } from "react";

export const NaverMapContext = createContext(null);

// eslint-disable-next-line react/display-name
const NaverMap = forwardRef((props, ref) => {
  const [map, setMap] = useState(null);
  const [renderAfter, setRenderAfter] = useState(false);
  useEffect(() => setRenderAfter(true), []);

  useEffect(() => {
    if (renderAfter) {
      const mapOptions = {
        center: new naver.maps.LatLng(props.center.lat, props.center.lng),
        zoom: props.zoom,
      };
      const map = new naver.maps.Map(props.id, mapOptions);
      setMap(map);
    }
  }, [renderAfter]);
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
  id: "map",
  center: { lat: 37.3595704, lng: 127.105399 },
  zoom: 10,
  width: "100vw",
  height: "100vh",
};

export default NaverMap;
