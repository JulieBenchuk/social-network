import React from 'react';
import './App.css';
import Nav_bar from "./components/Nav_bar/Nav_bar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/Preloader";


type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
const MapStateToProps = (state: AppStateType)=> ({
    initialized: state.app.isInitializedSuccess
})

 class App extends React.Component<MapDispatchToPropsType&MapStateToPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
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
}

export default compose<React.ComponentType>(withRouter, connect(MapStateToProps, {initializeApp})) (App);
