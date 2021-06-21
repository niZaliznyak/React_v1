import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b7aec3a8-1b77-41d6-aded-3789221e7d40"
    }
});

export const usersAPI = { //API для странички пользователей
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getUnfollow(userID) {
        return instance.delete(`follow/${userID}`)
            .then(response => response.data);
    },
    getFollow(userID) {
        return instance.post(`follow/${userID}`)
            .then(response => response.data);
    },
    getProfile(userID) {
        console.warn("Obsolete method. Use profileAPI");
        return profileAPI.getProfile(userID);
    }
};

export const authAPI = { // API для логина
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false){
        return instance.post(`/auth/login/`,{email, password, rememberMe});
    },
    logout(){
        return instance.delete(`/auth/login/`);
    }
}

export const profileAPI = { //API для своего профиля

    getProfile(userID) {
        return instance.get(`profile/${userID}`);
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status : status}); //"status :"-свойство объ к-рое требует сервер
    },
    updatePhoto(file) {
        let formData = new FormData();
        formData.append("image", file)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}