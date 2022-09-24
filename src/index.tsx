import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import React from "react";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import App from "./App";


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
