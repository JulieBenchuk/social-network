import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "e02ef661-65e1-4a01-b218-653cb908b7b1"
    }
})

//object with methods
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=> response.data)
    },
    authMe(){
       return  instance.get(`auth/me`).then(response=>response.data) ///need to use headers??????
    },
    unfollowUser(id: number){
        return instance.delete(`follow/`+ id).then(response=>response.data)
    },
    followUser(id: number){
        return instance.post(`follow/`+ id, {}).then(response=>response.data)
    }
}


