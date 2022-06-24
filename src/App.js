import { useRef, useEffect, useState, Suspense, ErrorBoundary } from 'react'
import { NaverMap } from 'react-naver-maps'
import Marker from './components/NaverMapTools/Marker';
import './App.css';
import { HomesProvider, initData } from './context/HomeContext';

function App() {
  const nRef = useRef(null);
  const [nMap, setNMap] = useState(null);
  //nRef.current.map
  useEffect(() => {
    setNMap(nRef.current?.map);
  }, [nRef]);

  return (
    <div className="App">
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%',
          height: '100vw',
        }}
        defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
        defaultZoom={12}
        naverRef={nRef}
      >
        <Suspense fallback={<p>사용자 정보 로딩중...</p>}>
          <HomesProvider resource={initData(nMap)}>
            <Marker />
          </HomesProvider>
        </Suspense>
      </NaverMap>
    </div>
  );
}

export default App;
