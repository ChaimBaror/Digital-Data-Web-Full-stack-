import * as astionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    loading: false,
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case astionTypes.ADD_USER:
            return {
                ...state,
                users: {
                    ...state.users.push(action.userName),
                },
            };
        case astionTypes.ADD_USER:
            return {
                ...state,
                users: {
                    ...state,
                },
            };
        default:
            return state;
    }
};

export default reducer;