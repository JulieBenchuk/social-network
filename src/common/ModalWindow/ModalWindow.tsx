import React from 'react';
import style from "./ModalWindow.module.css"
import {SuperButton} from "../SuperButton/SuperButton";

type ModalWindowPropsType = {
    active: boolean
    setActive: (value: boolean) => void
    question: string
    answerAgree: string
    answerReject: string
    agree: () => void
    reject: () => void
}
export const ModalWindow: React.FC<ModalWindowPropsType> = ({
                                                                active,
                                                                setActive,
                                                                answerReject,
                                                                answerAgree,
                                                                question, agree, reject
                                                            }) => {
    const onAgreeButtonClickHandler = () => {
        agree()
    }
    const onRejectButtonClickHandler = () => {
        reject()
    }
    return (
        <div className={active ? `${style.modal} ${style.modalActive}` : style.modal} onClick={() => setActive(false)}>
            <div className={active ? `${style.modalContent} ${style.modalContentActive}` : style.modalContent}
                 onClick={e => e.stopPropagation()}>

                <div className={style.modalBlock}>
                    <h3>{question}</h3>
                    <div className={style.buttonsBlock}>
                        <div>
                            <SuperButton onClick={onAgreeButtonClickHandler}>{answerAgree}</SuperButton>
                        </div>
                        <div>
                            <SuperButton onClick={onRejectButtonClickHandler}>{answerReject}</SuperButton>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
