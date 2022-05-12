import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import allPostsReducer from "../Recucers/reducer";
 


const rootReducer = combineReducers({
    allPostsReducer
})


const middleware = [thunk];

const initialState = {};


const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  export { store };