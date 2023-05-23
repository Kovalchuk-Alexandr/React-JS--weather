import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import App from './App';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> -выводит сообщение об ошибке на странице, если есть
  // существует в момент разработки. При сборке - нет
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

