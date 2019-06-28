import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";

import {Router} from "react-router";
import {Provider} from "mobx-react";

import './index.css';
import App from "./App";

import store from "./store/testStore";

const history = createBrowserHistory();


const app = (
    <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();