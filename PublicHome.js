import  * as NAVER from "./NaverMapHelper.js";
const MockData = [{address: '한밭대로114번길 34', lng: '37.3595704', lat: '127.105399'}]

const map = NAVER.createMap(NAVER.getPosition(37.3595704, 127.105399));

const result = MockData.map(({address, lng, lat}) => {
    return {address, position: NAVER.getPosition(lng, lat)}
  });

NAVER.createMarker(result, map, '<div style="width:150px;text-align:center;padding:10px;">The Letter is <b> hi </b>.</div>')