/*eslint-env es6*/

import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
    axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        );
};

//Login - get user token
export const loginUser = userData => dispatch => {
    axios
    .post("/api/users/login", userData)
    .then(res => {
        //save to localStorage

        //Set toke to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        //Set token to Auth header
        setAuthToken();
        //Decode token to get user data
        const decoded = jwt_decode(token);
        //Set current user
        dispatch(setCurrentUser(decoded));
    })
    // .catch(err => 
    //     dispatch({
    //         type: GET_ERRORS,
    //         payload: err.response.data
    //     })
    // );
    };

    //Set logged in user
    export const setCurrentUser = decoded => {
        return {
            type: SET_CURRENT_USER,
            payload: decoded
        };
    };

    //User loading
    export const setUserLoading = () => {
        return {
            type: USER_LOADING
        };
    };

    // Log user out
    export const logoutUser = () => dispatch => {
        //Remove token form local storage
        localStorage.removeItem("jwtToken");
        //Remove auth header for future requests
        setAuthToken(false);
        //Set Current user to empty object {} which will set isAuthenticated to false
        dispatch(setCurrentUser({}));
    };