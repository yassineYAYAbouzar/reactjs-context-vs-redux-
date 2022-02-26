import { createStore } from "redux";
import rootReducer from './reduecers'

const initialState =  {};

const store =createStore(rootReducer,initialState)

export default store