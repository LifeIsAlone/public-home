import React, { createContext, useContext, useReducer } from 'react'
import HOME from '../../happyhappyhouse.json';
import * as NAVER from './../../service/naverMapHelper';

console.log(HOME);

const initialState = {
  map:{
    loading: false,
    data: null,
    error: null
  },
  homes: {
    loading: false,
    data: null,
    error: null
  }
}

const loadingState = {
  loading: true,
  data: null,
  error: null
}

const success = data => ({
  loading: false,
  data,
  error: null
})

const error = error => ({
  loading: false,
  data : null,
  error
})

function HomeReducer(state, action){
  switch(action.type){
    case 'GET_HOMES':
        return{
          ...state,
          homes: loadingState
        }
    case 'GET_HOMES_SUCCESS':
      return{
        ...state,
        homes: success(action.data)
      }
    case 'GET_HOMES_ERROR':
      return{
        ...state,
        homes: error(action.error)
      }
      case 'GET_MAP':
        return{
          ...state,
          map: loadingState
        }
    case 'GET_MAP_SUCCESS':
      return{
        ...state,
        map: success(action.data)
      }
    case 'GET_MAP_ERROR':
      return{
        ...state,
        map: error(action.error)
      }
    default:
          throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const HomeStateContext = createContext(null);
const HomeDispatchContext = createContext(null);

export function HomesProvider({map,children}){
  console.log('map', map);
  const initMap =  {...initialState,  map:{
    loading: false,
    data: map,
    error: null
  }}
  const [state, dispatch] = useReducer(HomeReducer,initMap);
  return(
    <HomeStateContext.Provider value={state}>
      <HomeDispatchContext.Provider value={dispatch}>
        {children}
      </HomeDispatchContext.Provider>
    </HomeStateContext.Provider>
  )
}

export function useHomesState(){
  const state = useContext(HomeStateContext);
  if(!state){
    throw new Error('Cannot fin HomesProvider')
  }
  return state;
}

export function useHomesDispatch(){
  const dispatch = useContext(HomeDispatchContext);
  if(!dispatch){
    throw new Error('Cannot fin HomesProvider')
  }
  return dispatch;
}

export async function getHomes(dispatch) {
  dispatch({type: 'GET_HOMES'});
    try{
        const response = await Promise.all(HOME.map(async(data) =>{
        const position = await NAVER.changeAddressToPositionByGeocode(data.address);
        return {...data, position}
        }))
        dispatch({
            type: 'GET_HOMES_SUCCESS',
            data: response
        });
    } catch(e){
        dispatch({
            type:'GET_HOMES_ERROR',
            error: e
        })
    }
}