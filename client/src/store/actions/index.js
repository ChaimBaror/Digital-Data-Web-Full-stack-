import * as actionTypes from "./actionTypes";


export const adduser = (user) => {
    console.log("action add user work");
    return {
        type: actionTypes.ADD_USER,
        userName: user
    };
};

export const getAllUsers = (payload) => {
    console.log("action get All Users work");

    return {
        type: actionTypes.GET_USERS,
        payload: payload
    }
}

export const postUserAfterSaga = (payload) => {
    console.log("post User After Saga");

    return {
        type: actionTypes.POST_SUCCESS,
        payload: payload
    }
}


