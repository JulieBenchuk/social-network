import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav_bar from "./components/Nav_bar/Nav_bar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {ActionsType, StoreType} from "./redux/store";


type AppPropsType = {
    store: /*StoreType*/ any
    dispatch: (action: ActionsType) => void
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
                           store={props.store}
                           />}
                />
                <Route path={"/messages"} render={() => <DialogsContainer store={props.store} />}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
