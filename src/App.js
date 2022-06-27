import { useState, Suspense } from "react";
import Marker from "./components/NaverMapTools/Marker";
import Spinner from "./components/Spinner";
import Header from "./components/Header";

import "./App.css";
import { HomesProvider, initData } from "./context/HomeContext";
import { NaverMap } from "./components/NaverMapTools/NaverMap";

function App() {
  const [nMap, setNMap] = useState(null);


  return (
    <div>
      <Header />
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
        style={{
          width: "100%",
          height: "100vh",
        }}
        defaultCenter={{ lat: 37.5665734, lng: 126.978179 }}
        defaultZoom={12}
        mapState={(map) => setNMap(map)}
      />
      <Suspense fallback={<><Spinner text={"행복주택 데이터 수집중..."} /></>}>
        <HomesProvider resource={initData(nMap)}>
          <Marker />
        </HomesProvider>
      </Suspense>
    </div>
  );
}


export default App;
