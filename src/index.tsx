import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postsData = [
    {id: 1, post: "Hello!", likeCount: 100},
    {id: 2, post: "How many of us are here!", likeCount: 140},
    {id: 3, post: "I like this network!", likeCount: 200},
    {id: 4, post: "Woooow", likeCount: 200}
]
let messagesData = [
    {id: 1, message: "Hello!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Wow! You look great!"},
    {id: 4, message: "Let's go out)"},
    {id: 5, message: "Nice to meet you!"},
    {id: 6, message: "I'm Julie."}

]
let dialogsData = [
    {id: 1, name: "Aleksandra"},
    {id: 2, name: "Vladislav"},
    {id: 3, name: "Veronika"}
]

ReactDOM.render(
    <App posts={postsData} message={messagesData} dialog={dialogsData}/>,
    document.getElementById('root')
);