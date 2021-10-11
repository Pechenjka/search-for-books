import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
    app: appReducer,
    books: booksReducer,
});

export default rootReducer;
