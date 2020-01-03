import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { fetchGithubData } from './actions/index.js';
import ArrayData from './reducers/githubReducer.js';

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import registerServiceWorker from "./registerServiceWorker";
import * as serviceWorker from "./serviceWorker"

import App from "./App.js"

const store = createStore(ArrayData, applyMiddleware(thunk));

// store.dispatch(fetchGithubData());




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
