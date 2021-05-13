import {usersAPI} from "../api/api";

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const WAITING_RESPONSE = "WAITING_RESPONSE";
const WAITING_SUBSCRIBE = "WAITING_SUBSCRIBE";

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1,
    waitingResponse: false,
    waitingSubscribe: {status: false, id: null}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };

        case SET_USERS:
            return {
                ...state,
                usersData: action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case WAITING_RESPONSE:
            return {
                ...state,
                waitingResponse: action.toggle
            }
        case WAITING_SUBSCRIBE:
            return {
                ...state,
                waitingSubscribe: {status: action.toggle, id: action.userID}
            }

        default:
            return state;
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, id: userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, id: userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});
export const toggleWaiting = (toggle) => ({type: WAITING_RESPONSE, toggle});
export const toggleSubscribeProgress = (toggle, userID) => ({type: WAITING_SUBSCRIBE, toggle, userID});

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {

        dispatch(toggleWaiting(true));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleWaiting(false));
        dispatch(setUsers(data.items));

    }
}

export const followUnfollow = async (dispatch, userID, APImethod, actionCreator) => {

    dispatch(toggleSubscribeProgress(true, userID));

    let response = await APImethod(userID);
    if (response.resultCode == 0) {
        dispatch(actionCreator(userID));
    }
    dispatch(toggleSubscribeProgress(false));

}

export const unfollow = (userID) => {
    return async (dispatch) => { //функция dispatch приходит в санку из стора. Параметры, как userID передавать только через замыкание.
        followUnfollow(dispatch, userID, usersAPI.getUnfollow.bind(usersAPI), unfollowSuccess)
    }
}

export const follow = (userID) => {
    return async (dispatch) => { //функция dispatch приходит в санку из стора. Параметры, как userID передавать только через замыкание.
        followUnfollow(dispatch, userID, usersAPI.getFollow.bind(usersAPI), followSuccess)
    }
}

export default usersReducer;