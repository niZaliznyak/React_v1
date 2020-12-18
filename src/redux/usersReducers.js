const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    usersData: [
        {
            id: 0,
            follow: true,
            firstName: "Egor",
            lastName: "Bobrov",
            location: {country: "Ukraine", city: "Kyiv"},
            avatar: "url"
        },
        {
            id: 1,
            follow: true,
            firstName: "Alex",
            lastName: "Power",
            location: {country: "Russia", city: "Moscow"},
            avatar: "url"
        },
        {
            id: 2,
            follow: true,
            firstName: "Niko",
            lastName: "Belych",
            location: {country: "Poland", city: "Wroclav"},
            avatar: "url"
        },
    ]
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