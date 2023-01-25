import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from "./SuperButton.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type SuperButtonPropsType = DefaultButtonPropsType & {} /////????

export const SuperButton: React.FC<SuperButtonPropsType> = ({children, ...restProps}) => {

    const onClickHandler = () => {

    }
    return (
        <button onClick={onClickHandler} className={style.default}>{children}</button>
    );
};