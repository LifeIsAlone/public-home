import React from 'react'
import styled from 'styled-components';
import { useHomesState } from '../../../context/HomeContext';
import { setCenterByPosition } from '../../../helpers/naverMapHelper';

export default function Items({ item }) {
  const state = useHomesState();
  const { address, name, sells, position } = item;
  const handleClick = (e) => {
    setCenterByPosition(state.map.data, position);
  }
  return <StyledLi key={name} onClick={handleClick}>
    <Title>
      <div>{address}</div>
      <div>주택 이름: {name}</div>
    </Title>
    <Desc>
      <div>{sells.length} 세대</div>
    </Desc>
  </StyledLi>
}

const StyledLi = styled.li`
    cursor:pointer;
    list-style:none;
    display:list-item;
    padding : 1rem;
    border-bottom: solid #dededeAA 1.5px; 
    &:hover{
      background: #98B3F6AA;
    }
`
const Title = styled.div`
  font-weight: 300;
  div:first-child{
    font-size: 19px;
    font-weight: 540;

  }
`

const Desc = styled.div`
    color: grey;
    font-size: 15px;
`