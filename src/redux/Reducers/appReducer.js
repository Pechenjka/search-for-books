import {HIDE_LOADING, HIDE_LOADING_MORE_BOOKS, SHOW_LOADING, SHOW_LOADING_MORE_BOOKS} from "../types";

const initialState = {
    loading: false,
    loadingMoreBooks: false,
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return { ...state, loading: true };
        case HIDE_LOADING:
            return { ...state, loading: false };
        case SHOW_LOADING_MORE_BOOKS:
            return { ...state, loadingMoreBooks: true };
        case HIDE_LOADING_MORE_BOOKS:
            return { ...state, loadingMoreBooks: false };
        default:
            return state;
    }
};

export default appReducer;
