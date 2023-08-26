import {
    EMAIL_CODE_VERIFY_FAIL,
    EMAIL_CODE_VERIFY_REQUEST, EMAIL_CODE_VERIFY_SUCCESS,
    EMAIL_VERIFY_FAIL,
    EMAIL_VERIFY_REQUEST, EMAIL_VERIFY_SUCCESS,
    USER_GET_PROFILE_FAIL,
    USER_GET_PROFILE_REQUEST, USER_GET_PROFILE_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS
} from "../constants/userConstants";

export const userSignupReducers = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return {loading: true}
        case USER_SIGNUP_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_SIGNUP_FAIL:
            return {loading: false, error: action.payload}
        default: return state
    }
}

export const userLoginReducers = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT :
            return {}
        default: return state
    }
}

export const userProfileReducers = ( state = {}, action) => {
    switch (action.type){
        case USER_GET_PROFILE_REQUEST:
            return {loading: true}
        case USER_GET_PROFILE_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_GET_PROFILE_FAIL:
            return {loading: false, error: action.payload}
        default: return state
    }
}

export const emailVerifyReducers = (state = {}, action) => {
    switch (action.type){
        case EMAIL_VERIFY_REQUEST:
            return {loading: true}
        case EMAIL_VERIFY_SUCCESS:
            return {loading: false, success: action.payload}
        case EMAIL_VERIFY_FAIL:
            return {loading: false, error: action.payload}
        default: return state
    }
}

export const emailCodeVerifyReducers = (state = {}, action) => {
    switch (action.type){
        case EMAIL_CODE_VERIFY_REQUEST :
            return {loading: true}
        case EMAIL_CODE_VERIFY_SUCCESS:
            return {loading: false, success: action.payload}
        case EMAIL_CODE_VERIFY_FAIL :
            return {loading: false, error: action.payload}
        default: return state
    }
}

