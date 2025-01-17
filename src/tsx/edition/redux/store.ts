import { combineReducers, legacy_createStore } from "redux";
import { itemReducer } from "./reducer";
import { composeWithDevTools } from '@redux-devtools/extension';




const rootReducer = combineReducers({
    item: itemReducer
})

export const store = legacy_createStore(rootReducer, undefined, composeWithDevTools())
