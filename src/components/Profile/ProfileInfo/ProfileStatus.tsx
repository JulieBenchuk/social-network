import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component<any, any> {
    state={
        editMode: false,
        status: this.props.status
    }
    activateEditMode=()=>{
        this.setState({editMode: true})
    }
    deactivateEditMode=()=>{
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e: ChangeEvent<HTMLInputElement>)=>{
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>) {
        if (prevProps.status!==this.props.status){
            this.setState({status: this.props.status})
        }
    }

    render() {
        return<div>
            {!this.state.editMode && <div>
                <span className={s.status_span} onDoubleClick={this.activateEditMode}>{this.props.status || "no status :("}</span>
            </div>}
            {this.state.editMode  && <div>
                <input className={s.status_input} onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} placeholder={"status"} value={this.props.status }/>
            </div>}
        </div>
    }
}
export default ProfileStatus;