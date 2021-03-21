import * as astionTypes from '../actions/actionTypes';
import axios from '../../api/HttpClient';

const INIT_STATE = {
    users: [],
    loading: false,
    error:false
};


 const postUser = ( state, action ) => {
    return { ...state,  };

};

 const getUser = ( state, action ) => {
    return { ...state, ...action.payload };

};

const postUserAfterSaga = ( state, action ) => {
   console.log("post User After Saga POST SUCCESS");
};

const reducer = ( state = INIT_STATE, action ) => {
    switch ( action.type ) {
        case astionTypes.ADD_USER: return postUser(state, action);
        case astionTypes.GET_USERS: return getUser(state, action);
        case astionTypes.POST_SUCCESS: return postUserAfterSaga(state, action);

        default:
            return state;
    }
};

export default reducer;