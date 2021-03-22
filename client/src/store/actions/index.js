import * as actionTypes from "./actionTypes";


export const adduser = (payload) => {
    console.log("action add user work");
    return {
        type: actionTypes.ADD_USER,
        payload: payload
    };
};

export const usersFromDB = (payload) => {
    console.log("action user To redux");
    return {
        type: actionTypes.USERS_FROM_DB,
        payload: payload
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

export const ERROR_POST = (err) => {
    console.log("error User After Saga");

    return {
        type: actionTypes.POST_ERROR,
        error: err
    }
}


