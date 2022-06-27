import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import * as NAVER from "../../helpers/naverMapHelper";
import { useHomesState, useHomesDispatch } from "./../../context/HomeContext";

export function InfoWindowContent({ homeInfo }) {
  const sells = homeInfo.sells;
  return (
    <InfoWindowDiv>
      <InfoWindowScroll>
        <div>
          <h3>{homeInfo.name}</h3>
          <p>임대조건(2,3순위 기준, 최대전환 시)</p>
          {sells.map((sell) => {
            return (
              <ul>
                <li>주택정보: {sell.classes}</li>
                <li>보증금: {sell.totalPrice}</li>
                <li>임대료: {sell.monthPay}</li>
              </ul>
            );
          })}
        </div>
      </InfoWindowScroll>
    </InfoWindowDiv>
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
      <InfoWindowContent homeInfo={props}></InfoWindowContent>
    );
    return htmlString;
  });
}

const InfoWindowDiv = styled.div`
  width: 350px;
  text-align: left;
  padding: 10px;
`;

const InfoWindowScroll = styled.div`
  display: flex;
  overflow: auto;
  height: 30vh;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
