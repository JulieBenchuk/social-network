import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "0ae56a58-14cc-4242-b2f7-b23b240bd724"
    }
})

//object with methods
export const profileAPI = {
    setUserProfile(userID: number) {
        return instance.get("profile/" + userID)
    },
    getStatus(userID: number) {
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/` + id).then(response => response.data)
    },
    followUser(id: number) {
        return instance.post(`follow/` + id, {}).then(response => response.data)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data) ///need to use headers??????
    },
}


