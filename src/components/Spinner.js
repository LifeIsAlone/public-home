import React from 'react'
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import styled from 'styled-components';
const override = css`
  display: block;
  margin: 0 auto;
`;
const SpinLoader = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    background : #00000066;
    z-index: 100;
    transform:translate(-50%, -50%)
`
const SpinContents = styled.div`
    position: fixed;
    top:50%;
    left: 50%;
    transform:translate(-50%, -50%)
`

export default function Spinner({text}) {
  return (
    <SpinLoader>
        <SpinContents>
            <HashLoader color={"#000000"} loading={true} css={override} size={200} />
            <p style={{fontSize:40, fontWeight:500}}>{text}</p>
        </SpinContents>
    </SpinLoader>
  )
}
