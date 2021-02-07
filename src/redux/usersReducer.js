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
//action creators:
export const follow = (userID) => ({type: FOLLOW, id: userID});
//export const followAC = (userID) => ({type: FOLLOW, userID}); если свойство объекта имеет тоже имя, что и переменная, то можно писать сразу userID
export const unfollow = (userID) => ({type: UNFOLLOW, id: userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});
export const toggleWaiting = (toggle) => ({type: WAITING_RESPONSE, toggle});
export const toggleSubscribeProgress = (toggle, userID) => ({type: WAITING_SUBSCRIBE, toggle, userID});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(toggleWaiting(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleWaiting(false));
            dispatch(setUsers(data.items));
        });
    }
}

export default usersReducer;