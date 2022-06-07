import React from 'react';
import preloader from "./../common/img/Spin-1s-200px.svg"
import style from "./Preloader.module.css"

export const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={preloader}/>
        </div>
    );
};
