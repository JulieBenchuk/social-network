import React from "react";
import style from "./FormsControl.module.css"

export const Textarea = (props: any) => {
    const hasError = props.meta.touched && props.meta.error
    return <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <div><textarea {...props.input} {...props}/></div>
        <div>
            {hasError &&
                <span className={style.formControl + " " + style.error}>{props.meta.error}</span>}
        </div>
    </div>
}

export const Input = (props: any) => {
    const hasError = props.meta.touched && props.meta.error
    return <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <div><input {...props.input} {...props}/></div>
        <div>
            {hasError &&
                <span className={style.formControl + " " + style.error}>{props.meta.error}</span>}
        </div>
    </div>
}