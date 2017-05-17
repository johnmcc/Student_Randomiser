import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import getUrlParam from './models/UrlParams'

const names = getUrlParam("names[]");

ReactDOM.render(
  <App names={names} />,
  document.getElementById('root')
);
