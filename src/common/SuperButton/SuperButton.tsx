import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from "./SuperButton.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    >
type SuperButtonPropsType = DefaultButtonPropsType & {}

export const SuperButton: React.FC<SuperButtonPropsType> = ({children, ...restProps}) => {
        return (
            <button className={style.default} {...restProps}> {children} </button>
        );
    }
;