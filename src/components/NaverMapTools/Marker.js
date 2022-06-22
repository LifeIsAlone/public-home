
import { useEffect } from 'react';
import * as NAVER from '../../service/naverMapHelper';
import { useHomesState, useHomesDispatch, getHomes } from './HomeContext';


export default function Marker() {
    
    const state = useHomesState();
    const dispatch = useHomesDispatch();

    useEffect(()=>{
        (async()=>{getHomes(dispatch);
        console.log(state);})()
    },[dispatch])

    const {loading, data, error} = state.homes;

    NAVER.createMarker(data ,state.map.data, (props)=>{
        return '<div style="width:150px;text-align:center;padding:10px;">The Letter is <b> hi </b>.</div>'})
}
