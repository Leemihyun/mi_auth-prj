import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_GET_PROFILE_FAIL,
    USER_GET_PROFILE_REQUEST,
    USER_GET_PROFILE_SUCCESS,
    EMAIL_VERIFY_FAIL,
    EMAIL_VERIFY_REQUEST,
    EMAIL_VERIFY_SUCCESS,
    EMAIL_CODE_VERIFY_FAIL, EMAIL_CODE_VERIFY_REQUEST, EMAIL_CODE_VERIFY_SUCCESS
} from "../constants/userConstants";
import authApi from "../services/authApi";
export const usersignup = (
    userInput
) => async (dispatch) =>{
    try{
        dispatch({ // 상태값체크지점
            type: USER_SIGNUP_REQUEST
        })
        // 성공
        const {data} = await authApi.post('/signup', userInput)

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data.data
        })
    } catch (err){ // 실패
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: err.response && err.response.data.method ? err.response.data.method : err.response
        })
    }
}

export const login = (
    loginInfo
) => async (dispatch) =>{
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const {data} = await authApi.post('/login', loginInfo)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data.data.user
        })
        localStorage.setItem("userInfo", JSON.stringify(data.data.user))
        localStorage.setItem("token", JSON.stringify(data.data.token))

    } catch (err){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })

    }
}

export const getUserProfileByToken = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_GET_PROFILE_REQUEST
        })
        const token = localStorage.getItem('token')
        const option = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const {data} = await authApi.get('/', option)
        dispatch({
            type: USER_GET_PROFILE_SUCCESS,
            payload: data.data
        })
    } catch (err){
        dispatch({
            type: USER_GET_PROFILE_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const emailSendVerify = (email) => async(dispatch) => {
    try {
        dispatch({
            type: EMAIL_VERIFY_REQUEST
        })
        const {data, status} = await authApi.post('/email/send', email)
        if( status === 201){
            dispatch({
                type: EMAIL_VERIFY_SUCCESS,
                payload: data.data
            })
        }
    } catch (err){
        dispatch({
            type: EMAIL_VERIFY_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const emailCodeVerifyFuntion = (userInput) => async(dispatch) => {
    try {
        dispatch({
            type: EMAIL_CODE_VERIFY_REQUEST
        })
       const{data, status} =  await authApi.post('/email/check', userInput)
        if( status === 201){
            dispatch({
                type: EMAIL_CODE_VERIFY_SUCCESS,
                payload: data.data
            })
        }

    } catch (err) {
        dispatch({
            type: EMAIL_CODE_VERIFY_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('token')
    dispatch({ type: USER_LOGOUT})
    document.location.href = '/login'
}