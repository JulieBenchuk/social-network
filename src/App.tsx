import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import style from './App.module.css';
import {AppStateType} from "./redux/redux-store";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import {initializeAppTC} from "./redux/app-reducer";
import {Preloader} from "./common/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import Nav_bar from "./components/Nav_bar/Nav_bar";
import {Error404} from "./components/Error404/Error404";

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
    isLoading: boolean
}
const MapStateToProps = (state: AppStateType) => ({
    initialized: state.app.isInitializedSuccess,
    error: state.app.error,
    isLoading: state.app.isLoading
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
            <div className={style.app_wrapper}>
                <HeaderContainer/>
                <Nav_bar/>
                <div className={style.app_wrapper_content}>
                    {this.props.isLoading && <Preloader/>}
                    <Switch>
                        <Route path={"/profile/:userID?"}
                               render={withSuspense(ProfileContainer)}/>
                        <Route path={"/messages"} render={withSuspense(DialogsContainer)}/>
                        <Route path={"/news"} render={withSuspense(News)}/>
                        <Route path={"/music"} render={withSuspense(Music)}/>
                        <Route path={"/settings"} render={withSuspense(Settings)}/>
                        <Route path={"/users"} render={withSuspense(UsersContainer)}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                        <Route exact path={"/"} render={withSuspense(ProfileContainer)}/>
                        <Route path={"*"} render={() => <Error404/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default compose<React.ComponentType>(withRouter, connect(MapStateToProps, {initializeApp: initializeAppTC}))(App);
