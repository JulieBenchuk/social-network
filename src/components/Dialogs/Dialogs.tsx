import React from 'react';
import classes from "./Dialogs.module.css";

const Dialogs = (props: any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.listOfCompanions}>
                <div className={classes.companion + ' ' + classes.active}>Aleksandra</div>
                <div className={classes.companion}>Vladislav</div>
                <div className={classes.companion}>Ekaterina</div>
            </div>
            <div className={classes.conversation}>
                <div className={classes.messageInConversation}>Hello!</div>
                <div className={classes.messageInConversation}>What's up?</div>
                <div className={classes.messageInConversation}>What are you gonna do this weekend?</div>
                <div className={classes.messageInConversation}>Let's go with us))</div>
            </div>
        </div>
    );
};

export default Dialogs


