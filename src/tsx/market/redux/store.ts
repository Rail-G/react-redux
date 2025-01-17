import { combineReducers, legacy_createStore } from "redux";
import { marketReducer } from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";


const rootReducer = combineReducers({
    list: marketReducer
})

export const store = legacy_createStore(rootReducer, undefined, composeWithDevTools())