import {USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL} from "../constants/userConstants";
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