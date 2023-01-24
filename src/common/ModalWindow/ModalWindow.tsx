import React, {ReactNode} from 'react';
import style from "./ModalWindow.module.css"
import s from "../../components/Profile/ProfileInfo/ProfileInfo.module.css";

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

                <div className={s.modalBlock}>
                    <h3>{question}</h3>
                    <div className={s.buttonsBlock}>
                        <div>
                            <button onClick={onAgreeButtonClickHandler}>{answerAgree}</button>
                        </div>
                        <div>
                            <button onClick={onRejectButtonClickHandler}>{answerReject}</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
