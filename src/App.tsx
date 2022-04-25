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
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    addPost: () => void
    onChangeText: (text: string)=>void
}
const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav_bar/>
            <div className="app-wrapper-content">
                <Route path={"/profile"}
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           onChangeText={props.onChangeText}/>}
                />
                <Route path={"/messages"} render={() => <Dialogs dialog={props.state.dialogsPage.dialogs}
                                                                 message={props.state.dialogsPage.messages}/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
