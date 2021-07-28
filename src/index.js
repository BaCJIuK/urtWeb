import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { jssPreset, StylesProvider } from '@material-ui/core';
import rtl from 'jss-rtl'
import { create } from 'jss'

const jss = create({
  plugins: [...jssPreset().plugins, rtl()]
})
ReactDOM.render(
  <StylesProvider jss={jss} injectFirst>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </StylesProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
