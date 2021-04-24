import {createSelector} from "reselect";

const getUsersDataSelector = (state) => {
    return state.usersPage.usersData;
}

export const getUsersData = createSelector(getUsersDataSelector, (usersData)=> {
    return usersData.filter(u => true);
});//в эту функцию приходит state, хотя мы его не прописываем - так работает createSelector. (урок 83)

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const waitingResponse = (state) => {
    return state.usersPage.waitingResponse;
}
export const waitingSubscribe = (state) => {
    return state.usersPage.waitingSubscribe;
}
