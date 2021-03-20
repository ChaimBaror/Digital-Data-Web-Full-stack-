import * as actionTypes from "./actionTypes";
import axios from '../../api/HttpClient';


export const adduser = ( user ) => {
    return {
        type: actionTypes.ADD_USER,
        userName: user
    };
};

export const initUsers = () => {
    // return dispatch => {
    //     axios.get( '/user' )
    //         .then( response => {
    //            dispatch(setIngredients(response.data));
    //         } )
    //         .catch( error => {
    //             dispatch(fetchIngredientsFailed());
    //         } );
    // };
};