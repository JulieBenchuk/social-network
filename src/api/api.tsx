import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "e02ef661-65e1-4a01-b218-653cb908b7b1"
    }
})

export const getUsers = (currentPage: number = 1, pageSize: number = 5)=>{
   return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=> response.data)
}
