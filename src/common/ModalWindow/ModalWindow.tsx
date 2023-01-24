import React, {ReactNode} from 'react';
import style from "./ModalWindow.module.css"
import s from "../../components/Profile/ProfileInfo/ProfileInfo.module.css";

type ModalWindowPropsType = {
    active: boolean
    setActive: (value: boolean) => void
    question: string
    answerAgree: string
    answerReject: string
}
export const ModalWindow: React.FC<ModalWindowPropsType> = ({
                                                                active,
                                                                setActive,
                                                                answerReject,
                                                                answerAgree,
                                                                question
                                                            }) => {
    return (
        <div className={active ? `${style.modal} ${style.modalActive}` : style.modal} onClick={() => setActive(false)}>
            <div className={active ? `${style.modalContent} ${style.modalContentActive}` : style.modalContent}
                 onClick={e => e.stopPropagation()}>

                <div className={s.modalBlock}>
                    <h3>{question}</h3>
                    <div className={s.buttonsBlock}>
                        <div>
                            <button>{answerAgree}</button>
                        </div>
                        <div>
                            <button>{answerReject}</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
