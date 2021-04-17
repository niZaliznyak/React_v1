export const getUsersData = (state) => {
    return state.usersPage.usersData;
}
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
