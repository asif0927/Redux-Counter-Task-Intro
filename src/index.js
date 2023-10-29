import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ConfigureStore from "./redux/reducer/ConfigureStore";
import { Provider } from "react-redux";

const store=ConfigureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


