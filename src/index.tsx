import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./state";

ReactDOM.render(
    <App posts={state.posts} message={state.message} dialog={state.dialog}/>,
    document.getElementById('root')
);