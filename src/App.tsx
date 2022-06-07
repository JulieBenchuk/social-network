import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav_bar from "./components/Nav_bar/Nav_bar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";



const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav_bar/>
            <div className="app-wrapper-content">
                <Route path={"/profile"}
                       render={() => <Profile
                           />}
                />
                <Route path={"/messages"} render={() => <DialogsContainer/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                <Route path={"/users"} render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
