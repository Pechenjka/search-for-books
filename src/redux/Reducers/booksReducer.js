import {
    ALL_FOUND_BOOKS,
    FOUND_BOOKS,
    HIDE_NOT_FOUND,
    SHOW_NOT_FOUND,
    START_INDEX,
    START_INDEX_LOAD_MORE_BOOKS,
    VALUE_FOR_LOAD_MORE_BOOKS,
    VALUES,
} from "../types";

const initialState = {
    foundBooks: [],
    allFoundBooks: {},
    startIndex: 0,
    startIndexLoadMoreBooks: 32,
    values: { categories: "all", sorting: "relevance", search: "" },
    valueForLoadMoreBook: {},
    notFound: false,
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case VALUES:
            return { ...state, values: action.payload };
        case FOUND_BOOKS:
            return { ...state, foundBooks: action.payload };
        case ALL_FOUND_BOOKS:
            return { ...state, allFoundBooks: action.payload };
        case START_INDEX:
            return { ...state, startIndex: (state.startIndex = 0) };

        case START_INDEX_LOAD_MORE_BOOKS:
            return {
                ...state,
                startIndexLoadMoreBooks:
                    state.values.search !== "" ? action.payload : state.startIndexLoadMoreBooks + action.payload,
            };
        case VALUE_FOR_LOAD_MORE_BOOKS:
            return { ...state, valueForLoadMoreBook: action.payload };
        case SHOW_NOT_FOUND:
            return { ...state, notFound: true };
        case HIDE_NOT_FOUND:
            return { ...state, notFound: false };
        default:
            return state;
    }
};

export default booksReducer;
