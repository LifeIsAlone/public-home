
import * as NAVER from './../../service/naverMapHelper';

export default function Marker({position, map}) {
    NAVER.createMarker(position ,map, (props)=>{
        console.log(props);
        return '<div style="width:150px;text-align:center;padding:10px;">The Letter is <b> hi </b>.</div>'})
}
