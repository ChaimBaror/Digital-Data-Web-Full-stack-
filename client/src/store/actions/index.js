import * as actionTypes from "./actionTypes";


export const adduser = ( user ) => {
    return {
        type: actionTypes.ADD_USER,
        userName: user
    };
};

export const getAllUsers = (payload) => {
    return {type: actionTypes.GET_USERS,
             payload:payload
    }
}

