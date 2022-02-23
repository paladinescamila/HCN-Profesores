import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './app/App';
import store, { persistor } from "./redux/store";
import reportWebVitals from './app/reportWebVitals';

const { PUBLIC_URL } = process.env;

ReactDOM.render(
    <App store={store} persistor={persistor} basename={PUBLIC_URL} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
