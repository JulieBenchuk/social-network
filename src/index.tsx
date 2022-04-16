import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./state";

ReactDOM.render(
    <App posts={state.postsData} message={state.messagesData} dialog={state.dialogsData}/>,
    document.getElementById('root')
);