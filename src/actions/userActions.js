import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT
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
            payload: data.data
        })
        localStorage.setItem("userInfo", JSON.stringify(data.data.user))
        localStorage.setItem("token", JSON.stringify(data.data.token))

    } catch (err){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: err.response && err.response.data.method ? err.response.data.method : err.response.data
        })

    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('token')
    dispatch({ type: USER_LOGOUT})
    document.location.href = '/login'
}