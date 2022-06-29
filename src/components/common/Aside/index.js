import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useHomesState, useHomesDispatch, searchHomesAddress } from "./../../../provider/HomeContext";

import FilteredHomes from './FilteredHomes'
import icon from '../../../images/happy2.png'


function IconImage() {
  return <img style={{ width: "3.5rem" }} src={icon} />
}

export default function Index() {
  const inputRef = useRef(null);
  const state = useHomesState();
  const dispatch = useHomesDispatch();

  const [visibility, setVisibility] = useState(false);

  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchedData, setSearchData] = useState([]);

  useEffect(() => {
    if (searching && search) {

      setSearching(false);
      searchHomesAddress(dispatch, search);
    }
    if (searching && !search) {
      setSearchData("");
    }
  }, [search])


  useEffect(() => {
    if (state.filteredHomes && state.filteredHomes.length > 0) {
      setSearchData(<FilteredHomes />);
    }
  }, [state])


  const onChangeHandler = e => {
    setSearching(true);
    setSearch(e.target.value);
  }

  const visibleHandler = () => {
    setVisibility(f => !f);
  }
  return (
    <AsidePosition>
      <div className={!visibility ? 'appear-trigger' : 'disappear'} onClick={visibleHandler}><IconImage /></div>
      <div className={visibility ? 'appear-contents' : 'disappear'}>
        <AsideSearch>
          <form onSubmit={(e) => e.preventDefault()}>
            <label for="address" onClick={visibleHandler}>
              <IconImage />
            </label>
            <input ref={inputRef} type="text" value={search} onChange={onChangeHandler} />
            <input type="submit" value="검색" />
          </form>
        </AsideSearch>
        <AsideContents>
          {searchedData}
        </AsideContents>
      </div>
    </AsidePosition>
  )
}




const AsidePosition = styled.div`
  position: fixed;
  top:0; 
  width:wrap_content;
  background: #fffA;
  border-radius: .6rem .3rem .3rem 0;
  margin-top: 1rem;
  margin-left: 1rem;
  box-shadow: 1.2px 1.2px 3px #00000033;

  z-index:99999;
  
  .appear{

    &-trigger{
        width: 3.5rem;
        padding: .7rem .5rem;
        visibility:visible;
        opacity: 100;
        transition: all .6s fade;

    }
    &-contents{
        width: 24rem;
        visibility:visible;
        opacity: 100;
        transition: all .5s fade;
    }

  }
  .disappear{
    width: 0;
    height: 0;
    transition: width, height .4s ease;
    visibility:hidden;
    opacity: 0;
    &:after{
        display:none;
    }
  }
`
const AsideSearch = styled.div`
  padding: .7rem .5rem;
  

  & > form{
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: start;
  }
  input[type="text"]{
    width:15rem;
    background:none;
    outline:none;
    border:none;
    border-bottom: grey solid .5px;
    padding: 15px 0px 10px 15px;
    font-size: 15px;
  }
  input[type="submit"]{
    width:3rem;
    border:none;
    margin-left:.3rem;
    font-size: 15px;
  }

`

const AsideContents = styled.div`
`

const AddressButton = styled.button`

`
