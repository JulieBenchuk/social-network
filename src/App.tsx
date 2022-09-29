import React from 'react';
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import './App.css';
import {AppStateType} from "./redux/redux-store";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import {initializeAppTC} from "./redux/app-reducer";
import {Preloader} from "./common/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import Nav_bar from "./components/Nav_bar/Nav_bar";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));


type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
    error: string
}
const MapStateToProps = (state: AppStateType) => ({
    initialized: state.app.isInitializedSuccess,
    error: state.app.error
})

class App extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                {this.props.error && "!!!!!!error"}
                <HeaderContainer/>
                <Nav_bar/>
                <div className="app-wrapper-content">
                    <Route path={"/profile/:userID?"}
                           render={withSuspense(ProfileContainer)}/>
                    <Route path={"/messages"} render={withSuspense(DialogsContainer)}/>
                    <Route path={"/news"} render={withSuspense(News)}/>
                    <Route path={"/music"} render={withSuspense(Music)}/>
                    <Route path={"/settings"} render={withSuspense(Settings)}/>
                    <Route path={"/users"} render={withSuspense(UsersContainer)}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

export default compose<React.ComponentType>(withRouter, connect(MapStateToProps, {initializeApp: initializeAppTC}))(App);
