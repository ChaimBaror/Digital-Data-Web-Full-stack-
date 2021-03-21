import * as astionTypes from '../actions/actionTypes';
import axios from '../../api/HttpClient';

const INIT_STATE = {
    users: [],
    loading: false,
    error:false
};

// export default function data(state = INIT_STATE, action) {
//     return state
// }

 const postUser = ( state, action ) => {

    // console.log("postUser reduers",action);
    // const user = JSON.stringify(action.userName)
    // axios.post('/user', { user }).then(res => console.log(res.err))
    return ( state, {
        loading: false,
    } );
};

 const getUser = ( state, action ) => {
    return { ...state, ...action.payload };

};

const postUserAfterSaga = ( state, action ) => {
   console.log("post User After Saga");
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