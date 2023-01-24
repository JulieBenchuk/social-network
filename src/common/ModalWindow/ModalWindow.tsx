import React, {ReactNode} from 'react';
import style from "./ModalWindow.module.css"

type ModalWindowPropsType = {
    active: boolean
    setActive: (value: boolean) => void
    children: ReactNode
}
export const ModalWindow: React.FC<ModalWindowPropsType> = ({active, setActive, children}) => {
    return (
        <div className={active ? `${style.modal} ${style.modalActive}` : style.modal} onClick={() => setActive(false)}>
            <div className={active ? `${style.modalContent} ${style.modalContentActive}` : style.modalContent}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
