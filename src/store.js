import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
    emailCodeVerifyReducers,
    emailVerifyReducers,
    userLoginReducers,
    userProfileReducers,
    userSignupReducers
} from "./reducers/userReducers";

const reducer = combineReducers({
    userRegister: userSignupReducers,
    userLogin: userLoginReducers,
    userProfile: userProfileReducers,
    emailVerify: emailVerifyReducers,
    emailCodeVerify: emailCodeVerifyReducers
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initalState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;