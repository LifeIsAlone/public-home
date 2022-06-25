import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <StyledHeader>
        <div className="App-logo">

        </div>
        <div className="contents">
        </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  algin-content: space-between;
  top:0;
  width: 100%;
  height: 3.4rem;
  background: #fff;
  opacity: 65%;
`
