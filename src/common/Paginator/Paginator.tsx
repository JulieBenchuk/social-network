import React, {useState} from 'react';
import s from "./Paginator.module.css";

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
    const pagesCount = Math.ceil(totalItemsCount / pageSize) //кол-во страниц общее
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize) // кол-во порций
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1 //if 22 >>> (3-1)*10+1 >>> 22
    const rightPortionNumber = portionNumber * portionSize


    return (
        <div>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}> PREVIOUS </button>}

            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span key={p} className={p === currentPage ? s.currentPage : s.default}
                                 onClick={(e) => changePage(p)}>{p}</span>
                })}

            {portionNumber < portionCount && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}> NEXT </button>}
        </div>
    );
};