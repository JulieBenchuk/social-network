import React from 'react';
import s from "./Error404.module.css"
import img404 from "./../../assets/img/error404.jpeg"

export const Error404
= () => {
    return (
        <div className={s.error_block}>
            <img src={img404} alt="404_not_found"/>
        </div>
    );
};