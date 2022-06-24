import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import * as NAVER from "../../helpers/naverMapHelper";
import { useHomesState, useHomesDispatch } from "./../../context/HomeContext";

export function RenderInfowindowContent({ homeInfo }) {
  const sells = homeInfo.sells;
  return (
    <InfowindowDiv>
      <div>
        <h3>{homeInfo.name}</h3>
        {sells.map((sell) => {
          return (
            <ul>
              <li>주택정보: {sell.classes}</li>
              <li>최대전환 보증금: {sell.totalPrice}</li>
              <li>최소전환 월세: {sell.monthPay}</li>
            </ul>
          );
        })}
      </div>
    </InfowindowDiv>
  );
}

export default function Marker() {
  const state = useHomesState();
  const dispatch = useHomesDispatch();
  const addCommas = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const { loading, data, error } = state.homes;

  NAVER.createMarker(data, state.map.data, (props) => {
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <RenderInfowindowContent homeInfo={props}></RenderInfowindowContent>
    );
    return htmlString;
  });
}

const InfowindowDiv = styled.div`
  width: 300px;
  text-align: left;
  padding: 10px;
`;
