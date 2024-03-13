import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App';
import { store } from './store/index' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/will-win">
      <App />
    </BrowserRouter>
  </Provider>
);

