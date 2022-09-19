import React from 'react';
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    changePage: (page: number) => void
}
export const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, currentPage, changePage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let allPages = []
    for (let i = 1; i <= pagesCount; i++) {
        allPages.push(i)
    }
    return (
        <div>
            {allPages.map(p => {
                return <span className={(p === currentPage) ? s.currentPage : ""}
                             onClick={(e) => changePage(p)}>{p}</span>
            })}
        </div>
    );
};