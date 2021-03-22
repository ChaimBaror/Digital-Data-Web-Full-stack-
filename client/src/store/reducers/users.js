import * as astionTypes from '../actions/actionTypes';
import axios from '../../api/HttpClient';

const INIT_STATE = {
    users: [
        // { id: "1", name: "chaim", age: "1", email: 'chi@gmail.com' },
        // { id: "2", name: "david", age: "2", email: 'david@gmail.com' }
    ],
    loading: false,
    error: false
};


const postUser = (state, action) => {
    return { ...state, };

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
    // const newUsers =  { ...action.payload } ;
    console.log("getUser reduce", action.payload);
    return {
        loading: false,
        error: false,
        users: action.payload
    };

};

const postUserAfterSaga = (state, action) => {
    return {
        loading: false,
        users: action.payload,
        error: ''
    }
};

const errorMess = (state, action) => {
    console.log(action.error.message);
    return {
        ...state,
        error: true
    }
};



const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case astionTypes.ADD_USER: return postUserAfterSaga(state, action);
        case astionTypes.GET_USERS: return getUser(state, action);
        case astionTypes.USERS_FROM_DB: return usersFromDB(state, action);
        case astionTypes.POST_SUCCESS: return postUserAfterSaga(state, action);
        case astionTypes.POST_ERROR: return errorMess(state, action);

        default:
            return state;
    }
};

export default reducer;