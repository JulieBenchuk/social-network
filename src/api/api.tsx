import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "d501eb2c-62af-4110-b3bd-a9b80e379d76"
    }
})

//object with methods
export const profileAPI = {
    getUserProfile(userID: number) {
        return instance.get<UserProfileType>("profile/" + userID)
    },
    getStatus(userID: number) {
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile(profile: UserProfileType) {
        return instance.put("profile", profile)
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
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
export const securityAPI = {
    getCaptchaURL() {
        return instance.get<SecurityResponseType>("security/get-captcha-url")
    }
}

export type UserProfileType = {
    aboutMe: string
    contacts?: any
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    fullName: string
    userId?: number
    photos?: PhotosType
}
export type ContactsType = {
    facebook?: string
    website?: string
    vk?: string
    twitter?: string
    instagram?: string
    youtube?: string
    github?: string
    mainLink?: string
}
export type PhotosType = {
    small: any
    large: any
}
export type SecurityResponseType = {
    url: string
}


