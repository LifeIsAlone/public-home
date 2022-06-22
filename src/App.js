import { useRef, useEffect, useState, useContext } from 'react'
import {NaverMap} from 'react-naver-maps'
import Marker from './components/NaverMapTools/Marker';
import './App.css';
import * as NAVER from './service/naverMapHelper';


const MockData = [{address: '한밭대로114번길 34', lng: '37.3595704', lat: '127.105399'}]
const result = MockData.map(({address, lng, lat}) => {
    return {address, position: NAVER.getPosition(lng, lat)}
  });

function App() {
  const nRef = useRef(null);
  const [nMap, setNMap] = useState(undefined);
  useEffect(()=>{
    console.log(nRef.current?.map);
    if(nRef){
      setNMap(nRef.current?.map);
    }

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
          {
            nMap && <Marker position={result} map={nMap} />
          }
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
