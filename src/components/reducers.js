import { combineReducers } from 'redux'
import loginReducer from './Login/Reducer'

export default combineReducers({
    login: loginReducer
})