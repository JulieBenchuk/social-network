import React from 'react';
import s from "./Contact.module.css"

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
export const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <span className={s.title}>{contactTitle}:</span>
            <span className={s.value}>{contactValue}</span>
        </div>
    );
};