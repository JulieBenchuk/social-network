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
import {StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
}
const App = (props: AppPropsType) => {
    const state = props.store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav_bar/>
            <div className="app-wrapper-content">
                <Route path={"/profile"}
                       render={() => <Profile
                           profilePage={state.profilePage}
                           addPost={props.store.addPost.bind(props.store)}
                           onChangeText={props.store.onChangeText.bind(props.store)}/>}
                />
                <Route path={"/messages"} render={() => <Dialogs dialog={state.dialogsPage.dialogs}
                                                                 message={state.dialogsPage.messages}/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
