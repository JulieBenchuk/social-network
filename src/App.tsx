import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav_bar from "./components/Nav_bar/Nav_bar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {state} from "./redux/state";



const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Nav_bar/>
                <div className="app-wrapper-content">
                    <Route path={"/profile"} render={() => <Profile post={state.profilePage.posts}/>}/>
                    <Route path={"/messages"} render={() => <Dialogs dialog={state.dialogsPage.dialogs} message={state.dialogsPage.messages}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;
