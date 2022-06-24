
import { useEffect } from 'react';
import * as NAVER from '../../helpers/naverMapHelper';
import { useHomesState, useHomesDispatch, getHomes } from './../../context/HomeContext';
// export function renderContent({ data }) {
//     const sells = data.sells;
//   return (
//     <div>
//       <h3>{data.name}</h3>
//       {sells.map((sell) => {
//         return (
//           <div>
//             <p>주택유형: {sell.Classes}</p>
//             <p>최대보증금: {sell.totalPrice}</p>
//             <p>최소월세: {sell.monthPay}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

export default function Marker() {
    const state = useHomesState();
    const dispatch = useHomesDispatch();
    const addCommas = (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    useEffect(() => {
        (async () => {
            getHomes(dispatch);
            console.log(state);
        })();
    }, [dispatch]);

    const { loading, data, error } = state.homes;

    NAVER.createMarker(data, state.map.data, (props) => {
        // console.log(data[0]);
        // console.log(props);
        const sells = props.sells;
        // return <renderContent data={props}></renderContent>;
        return `<div style="width:300px;text-align:left;padding:10px;">
                <h3>${props.name}</h3>
                ${sells.map((sell) => {
            return `
                    <ul>
                      <li>주택유형: ${sell.Classes}</li>
                      <li>최대보증금: ${addCommas(
                sell.totalPrice / 10000
            )}만원</li>
                      <li>최소월세: ${addCommas(sell.monthPay / 10000)}만원</li>
                      </p>
                    </ul>
                    `;
        })}
            </div>`;
    });
}
