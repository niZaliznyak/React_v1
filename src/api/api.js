import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b7aec3a8-1b77-41d6-aded-3789221e7d40"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getUnfollow(userID) {
        return instance.delete(`follow/${userID}`)
            .then(response => response.data);
    },
    getFollow(userID) {
        return instance.post(`follow/${userID}`, {}) // тут может скрываться ошибка - при методете пост добавляем в свойство пустой объект, зачем хз
            .then(response => response.data);
    }

};
