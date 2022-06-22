import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RenderAfterNavermapsLoaded
       clientId={"83bfuniegk"}
       error={<p>Maps Load Error</p>}
       loading={<p>Maps Loading</p>}
       >
    <App />
    </RenderAfterNavermapsLoaded>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
