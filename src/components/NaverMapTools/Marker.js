
import { useEffect } from 'react';
import * as NAVER from '../../helpers/naverMapHelper';
import { useHomesState, useHomesDispatch, getHomes } from './../../context/HomeContext';


export default function Marker() {
    
    const state = useHomesState();
    const dispatch = useHomesDispatch();


    const {loading, data, error} = state.homes;

    NAVER.createMarker(data ,state.map.data, (props)=>{
        return '<div style="width:150px;text-align:center;padding:10px;">The Letter is <b> hi </b>.</div>'})
}
