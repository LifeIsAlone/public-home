import { useRef, useEffect, useState, Suspense, ErrorBoundary } from 'react'
import { NaverMap } from 'react-naver-maps'
import Marker from './components/NaverMapTools/Marker';
import './App.css';
import { HomesProvider, initData } from './context/HomeContext';
import Header from './components/Header';
import Spinner from './components/Spinner';

function App() {
  const nRef = useRef(null);
  const [nMap, setNMap] = useState(null);
  //nRef.current.map
  useEffect(() => {
    setNMap(nRef.current?.map);
  }, [nRef]);

  return (
    <div className="App">
      <Spinner /> 

      <NaverMap
// default: react-naver-map
        style={{
          width: '100%',
          height: '100vh',
          zIndex: -1,
        }}
        defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
        defaultZoom={12}
        naverRef={nRef}
      >
        <Suspense fallback={<p>행복주택 정보 로딩중...</p>}>
          <HomesProvider resource={initData(nMap)}>
            <Header/>
            <Marker />
          </HomesProvider>
        </Suspense>
      </NaverMap>

    </div>
  );
}


export default App;
