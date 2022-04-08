import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink, Route} from "react-router-dom";
import Profile from "../Profile/Profile";

const Dialogs = (props: any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.listOfCompanions}>
                <div className={classes.companion}>
                    <NavLink to="/Aleksandra" activeClassName={classes.active}>Aleksandra</NavLink>
                </div>
                <div className={classes.companion}>
                    <NavLink to="/Vladislav" activeClassName={classes.active}>Vladislav</NavLink>
                </div>
                <div className={classes.companion}>
                    <NavLink to="/Ekaterina" activeClassName={classes.active}>Ekaterina</NavLink>
                </div>
            </div>
            <div className={classes.conversation}>
         {/*    <Route path="/Aleksandra" component={Dialogs!}/>
                <Route path="/Vladislav" component={Dialogs!}/>
                <Route path="/Ekaterina" component={Dialogs!}/>*/}
                <div className={classes.messageInConversation}>Hello!</div>
                <div className={classes.messageInConversation}>What's up?</div>
                <div className={classes.messageInConversation}>What are you gonna do this weekend?</div>
                <div className={classes.messageInConversation}>Let's go with us))</div>
            </div>
        </div>
    );
};

export default Dialogs


