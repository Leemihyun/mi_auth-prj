import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {userSignupReducers} from "./reducers/userReducers";

const reducer = combineReducers({
    userRegister: userSignupReducers
})

const initalState = {

}

const middleware = [thunk]

const store = createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;