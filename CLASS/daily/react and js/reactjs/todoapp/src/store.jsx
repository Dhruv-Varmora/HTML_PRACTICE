import {createStore,combineReducers} from "redux";
import AllData from "./reducres/reducer"

const store = createStore(combineReducers({
    listdata:AllData,
})
)
export default store;