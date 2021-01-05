const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    usersData: [],
    pageSize : 5,
    totalUsersCount : 21,
    currentPage: 1
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, follow: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.id) {
                        return {...user, follow: false}
                    }
                    return user;
                })
            };

        case SET_USERS:
            return {
                ...state,
                usersData: [...state.usersData, ...action.users]
            };

        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, id: userID});
//export const followAC = (userID) => ({type: FOLLOW, userID}); возможно нужно так
export const unfollowAC = (userID) => ({type: UNFOLLOW, id: userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducers;