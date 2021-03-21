import * as astionTypes from '../actions/actionTypes';

const INIT_STATE = {
    users: [],
    loading: false,
};

// export default function data(state = INIT_STATE, action) {
//     return state
// }

 const postUser = ( state, action ) => {
    const newUser = action.userName;
    return ( state, {
        loading: false,
        users: state.users.concat( newUser )
    } );
};

 const getUser = ( state, action ) => {
    return { ...state, ...action.payload };

};

const reducer = ( state = INIT_STATE, action ) => {
    switch ( action.type ) {
        case astionTypes.ADD_USER: return postUser(state, action);
        case astionTypes.GET_USERS: return getUser(state, action);
        default:
            return state;
    }
};

export default reducer;