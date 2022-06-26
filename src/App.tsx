import React from 'react';
import './App.css';
import Nav_bar from "./components/Nav_bar/Nav_bar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";




const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Nav_bar/>
            <div className="app-wrapper-content">
                <Route path={"/profile/:userID?"}
                       render={() => <ProfileContainer/>}/>
                <Route path={"/messages"} render={() => <DialogsContainer/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                <Route path={"/users"} render={() => <UsersContainer/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
