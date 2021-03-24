import * as astionTypes from '../actions/actionTypes';

const INIT_STATE = {
    users: [],
    loading: false,
    error: false
};


const usersFromDB = (state, action) => {
    console.log("usersToArray reduce");
    return {
        loading: false,
        error: false,
        users: action.payload
    };
};

const getUser = (state, action) => {
    console.log("getUser reduce", action.payload);
    return {
        loading: false,
        error: false,
        users: action.payload
    };

};

const postUserAfterSaga = (state, action) => {
    console.log("postUserAfterSaga");
    return {
        loading: false,
        users: action.payload,
        error: false
    }
};

const errorMessage = (state, action) => {
    console.log(action.error);
    return {
        ...state,
        error:  action.error.request.response
    }
};



const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case astionTypes.ADD_USER: return postUserAfterSaga(state, action);
        case astionTypes.GET_USERS: return getUser(state, action);
        case astionTypes.USERS_FROM_DB: return usersFromDB(state, action);
        case astionTypes.POST_SUCCESS: return postUserAfterSaga(state, action);
        case astionTypes.POST_ERROR: return errorMessage(state, action);

        default:
            return state;
    }
};

export default reducer;