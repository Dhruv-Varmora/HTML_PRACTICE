import reducer from "./reducers";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    reducer:reducer
})
export default rootReducer;