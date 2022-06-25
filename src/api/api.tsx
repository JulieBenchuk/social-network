import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "23ab339b-db21-4e10-bd87-f077b2b3152f"
    }
})

//object with methods
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=> response.data)
    },
    unfollowUser(id: number){
        return instance.delete(`follow/`+ id).then(response=>response.data)
    },
    followUser(id: number){
        return instance.post(`follow/`+ id, {}).then(response=>response.data)
    },
    setUserProfile (userID: number){
        return instance.get("profile/" + userID)
    }
}
export const authAPI = {
    me(){
        return  instance.get(`auth/me`).then(response=>response.data) ///need to use headers??????
    },
}


