import { useRef, useContext, useEffect, Suspense, useState } from 'react'
import {NaverMap} from 'react-naver-maps'
import Marker from './components/NaverMapTools/Marker';
import './App.css';
import * as NAVER from './service/naverMapHelper';
import './components/NaverMapTools/HomeContext';
import {HomesProvider} from './components/NaverMapTools/HomeContext';


const MockData = [
  {
    name: "강남센트럴아이파크(개나리4차)",
    address: "서울특별시 강남구 역삼동 712-3",
  },
  {
    name: "건대프라하임3차(하양동 94-9)",
    address: "서울특별시 광진구 화양동 94-9",
  },
  {
    name: "다온타워(신림동 1420-6)",
    address: "서울특별시 관악구 신림동 1420-6",
  },
];
async function convertMockData($MockData){
  const result = await Promise.all( $MockData.map(async({name, address}) =>{
    const position = await NAVER.changeAddressToPositionByGeocode(address);
    return {name, position}
  }))
  return result;
}

let result;

function App() {
  const nRef = useRef(null);
  const [nMap, setNMap] = useState(null);
  //nRef.current.map
  useEffect(()=>{
    setNMap(nRef.current?.map);
  },[nRef])

  return (
    <div className="App">
        <NaverMap
          mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
          style={{
            width: '600px',
            height: '400px',
          }}
          defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
          defaultZoom={10}
          naverRef={nRef}
        >

          {nMap && <HomesProvider map={nMap}>
              <Marker />
          </HomesProvider>}
        </NaverMap>
    </div>
  );
}

function Test(props) {
  console.log('test',props);
  return (
    <div>Test</div>
  )
}


export default App;
