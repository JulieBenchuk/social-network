import React, {useState} from 'react';
import s from "./Paginator.module.css";
import {SuperButton} from "../SuperButton/SuperButton";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    changePage: (page: number) => void
    portionSize: number
}
export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalItemsCount,
                                                            pageSize,
                                                            currentPage,
                                                            changePage,
                                                            portionSize
                                                        }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage/portionSize))
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize



    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <SuperButton onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}> PREV </SuperButton>}

            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span key={p} className={`${s.default} ${p === currentPage ? s.currentPage : ''}`}
                                 onClick={() => changePage(p)}>{p}</span>
                })}

            {portionNumber < portionCount && <SuperButton onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}> NEXT </SuperButton>}
        </div>
    );
};