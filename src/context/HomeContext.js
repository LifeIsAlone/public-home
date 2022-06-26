import React, { createContext, useContext, useReducer } from 'react'
import HOME from '../happyhappyhouse.json';
import { createFuzzyMatcher } from '../helpers/fuzzyMather';
import * as NAVER from '../helpers/naverMapHelper';
import * as pend from '../helpers/suspendingHelper';

console.log(HOME);

const initialState = {
  map: {
    loading: false,
    data: null,
    error: null
  },
  homes: {
    loading: false,
    data: null,
    error: null
  },
  filteredHomes: {
    data: null
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
  data: null,
  error
})

function HomeReducer(state, action) {
  switch (action.type) {
    case 'GET_HOMES':
      return {
        ...state,
        homes: loadingState
      }
    case 'GET_HOMES_SUCCESS':
      return {
        ...state,
        homes: success(action.data)
      }
    case 'GET_HOMES_ERROR':
      return {
        ...state,
        homes: error(action.error)
      }
    case 'GET_MAP':
      return {
        ...state,
        map: loadingState
      }
    case 'GET_MAP_SUCCESS':
      return {
        ...state,
        map: success(action.data)
      }
    case 'GET_MAP_ERROR':
      return {
        ...state,
        map: error(action.error)
      }
    case 'SEARCH_HOMES':
      const search = action.payload;
      return {
        ...state,
        filteredHomes: state.homes.data.filter(data => createFuzzyMatcher(search).test(data.address))
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const HomeStateContext = createContext(null);
const HomeDispatchContext = createContext(null);

export function HomesProvider({ resource, children }) {
  console.log('map', resource);

  const map = resource.map.read();
  const homes = resource.homes.read();

  const initMap = {
    ...initialState,
    map: {
      loading: false,
      data: map,
      error: null
    },
    homes: {
      loading: false,
      data: homes,
      error: null
    }
  }
  const [state, dispatch] = useReducer(HomeReducer, initMap);
  return (
    <HomeStateContext.Provider value={state}>
      <HomeDispatchContext.Provider value={dispatch}>
        {children}
      </HomeDispatchContext.Provider>
    </HomeStateContext.Provider>
  )
}

function getInitHomesData() {
  const promise = Promise.all(HOME.map(async (data) => {
    try {
      const position = await NAVER.changeAddressToPositionByGeocode(data.address);
      if (position) {
        return { ...data, position }
      }
    } catch (e) {
      new Error(`${data.address} 오류발생됨 ${e}`);
    }
  }))
  return pend.wrapPromise(promise);
}

function waitNaverMap(nMap) {
  return pend.wrapPromise(new Promise((resole, reject) => {
    if (nMap) {
      resole(nMap)
    } else {
      reject("NaverMap이 없습니다.")
    }
  }))
}

export function initData(nMap) {
  return {
    map: waitNaverMap(nMap),
    homes: getInitHomesData()
  };
}

export function useHomesState() {
  const state = useContext(HomeStateContext);
  if (!state) {
    throw new Error('Cannot fin HomesProvider')
  }
  return state;
}

export function useHomesDispatch() {
  const dispatch = useContext(HomeDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot fin HomesProvider')
  }
  return dispatch;
}

export function searchHomesAddress(dispatch, search) {
  dispatch({ type: 'SEARCH_HOMES', payload: search });
}
