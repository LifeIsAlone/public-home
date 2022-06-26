import { useRef, useEffect, useState, Suspense } from "react";
import { NaverMap } from "react-naver-maps";
import Marker from "./components/NaverMapTools/Marker";
import Spinner from "./components/Spinner";
import Aside from "./components/Aside";

import "./App.css";
import { HomesProvider, initData } from "./context/HomeContext";

function App() {
  const nRef = useRef(null);
  const [nMap, setNMap] = useState(null);
  //nRef.current.map
  useEffect(() => {
    if (nRef.current?.map)
      setNMap(nRef.current?.map);
  }, [nRef]);

  return (
    <div>
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
        style={{
          width: "100%",
          height: "100vh",
        }}
        defaultCenter={{ lat: 37.5665734, lng: 126.978179 }}
        defaultZoom={12}
        naverRef={nRef}
      >

        <Suspense fallback={<><Spinner text={"행복주택 데이터 수집중..."} /></>}>
          <HomesProvider resource={initData(nMap)}>
            <Aside />
            <Marker />
          </HomesProvider>
        </Suspense>
      </NaverMap>

    </div>
  );
}


export default App;
