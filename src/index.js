import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/containers/App/App';
import * as serviceWorker from './serviceWorker';
// 6.14.5
// 14.4.0
// User Dashboards
// CRUD Operation
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
