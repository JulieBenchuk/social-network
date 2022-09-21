import React from "react";
import style from "./FormsControl.module.css"
import {WrappedFieldProps} from "redux-form";

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const hasError = props.meta.touched && props.meta.error
    return <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <div><textarea {...props.input} {...props}/></div>
        <div>
            {hasError &&
                <span className={style.formControl + " " + style.error}>{props.meta.error}</span>}
        </div>
    </div>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const hasError = props.meta.touched && props.meta.error
    return <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <div><input {...props.input} {...props}/></div>
        <div>
            {hasError &&
                <span className={style.formControl + " " + style.error}>{props.meta.error}</span>}
        </div>
    </div>
}