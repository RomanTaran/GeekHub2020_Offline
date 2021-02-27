import React from 'react'
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));
export default store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

