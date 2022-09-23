import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../../common/Paginator/Paginator";
import {User} from "./User/User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isAuth: boolean
    changePage: (page: number) => void
    users: UserType[]
    unfollow: (id: number) => void
    follow: (id: number) => void
}

export const Users: React.FC<UsersPropsType> = ({
                                                    totalUsersCount,
                                                    pageSize,
                                                    currentPage,
                                                    changePage,
                                                    users,
                                                    unfollow,
                                                    follow
                                                }) => {

    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       changePage={changePage} portionSize={10}/>
            <div>
                {users.map(u => <User user={u} key={u.id} followingInProgress={u.followingInProgress}
                                      unfollow={unfollow} follow={follow}/>)}

            </div>
        </div>
    )
}

