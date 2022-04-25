import {addPost, onChangeText, RootStateType, state, subscriber} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} onChangeText={onChangeText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
subscriber(rerenderEntireTree)