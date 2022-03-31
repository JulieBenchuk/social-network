import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav_bar from "./components/Nav_bar";
import Profile from "./components/Profile";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav_bar />
            <Profile />
        </div>
    );
}

export default App;
