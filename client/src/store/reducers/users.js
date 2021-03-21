import * as astionTypes from '../actions/actionTypes';
import axios from '../../api/HttpClient';

const INIT_STATE = {
    users: [],
    loading: false,
    error:''
};



 const postUser = ( state, action ) => {
    return { ...state,  };

};

 const getUser = ( state, action ) => {
    const newUsers =  { ...action.payload } ;
    return ( state, {
        loading: false,
        error: false,
        users:  newUsers 
    } );

};

const postUserAfterSaga = ( state, action ) => {
    return ( state, { error: false } )
};

const errorMass = ( state, action ) => {
    console.log(action.error);
    return ( state, { error: true } )
 };



const reducer = ( state = INIT_STATE, action ) => {
    switch ( action.type ) {
        case astionTypes.ADD_USER: return postUser(state, action);
        case astionTypes.GET_USERS: return getUser(state, action);
        case astionTypes.POST_SUCCESS: return postUserAfterSaga(state, action);
        case astionTypes.POST_ERROR: return errorMass(state, action);

        default:
            return state;
    }
};

export default reducer;