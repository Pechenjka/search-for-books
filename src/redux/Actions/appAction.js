import booksApi from "../../utils/BooksApi";
import {
    ALL_FOUND_BOOKS,
    BOOK_DESCRIPTION,
    FOUND_BOOKS,
    HIDE_BOOK_DESCRIPTION,
    HIDE_LOADING,
    HIDE_LOADING_MORE_BOOKS,
    HIDE_NOT_FOUND,
    SHOW_BOOK_DESCRIPTION,
    SHOW_LOADING,
    SHOW_LOADING_MORE_BOOKS,
    SHOW_NOT_FOUND,
    START_INDEX_LOAD_MORE_BOOKS,
    VALUE_FOR_LOAD_MORE_BOOKS,
    VALUES,
} from "../types";

const allFoundBooks = (books) => {
    return {
        type: ALL_FOUND_BOOKS,
        payload: books,
    };
};

export const foundBooks = (data) => {
    return {
        type: FOUND_BOOKS,
        payload: data,
    };
};

export const startIndexLoadMoreBooks = (data) => {
    return {
        type: START_INDEX_LOAD_MORE_BOOKS,
        payload: data,
    };
};

export const valuesInput = (data) => {
    return {
        type: VALUES,
        payload: data,
    };
};

export const valueForLoadMoreBooks = (data) => {
    return {
        type: VALUE_FOR_LOAD_MORE_BOOKS,
        payload: data,
    };
};

export const showNotFound = () => {
    return {
        type: SHOW_NOT_FOUND,
    };
};

export const hideNotFound = () => {
    return {
        type: HIDE_NOT_FOUND,
    };
};

export const showLoading = () => {
    return {
        type: SHOW_LOADING,
    };
};

export const hideLoading = () => {
    return {
        type: HIDE_LOADING,
    };
};

export const showLoadingMoreBooks = () => {
    return {
        type: SHOW_LOADING_MORE_BOOKS,
    };
};

export const hideLoadingMoreBooks = () => {
    return {
        type: HIDE_LOADING_MORE_BOOKS,
    };
};

export const bookDescription = (data) => {
    return {
        type: BOOK_DESCRIPTION,
        payload: data,
    };
};

export const showBookDescription = () => {
    return {
        type: SHOW_BOOK_DESCRIPTION,
    };
};

export const hideBookDescription = () => {
    return {
        type: HIDE_BOOK_DESCRIPTION,
    };
};
export const handlerShowLoadMoreBooks = (value, startIndex, initArrFoundBooks) => {
    return (dispatch) => {
        dispatch(showLoadingMoreBooks());
        return booksApi
            .getBooks(value, startIndex)
            .then((data) => {
                console.log(data);
                if (data) {
                    const booksInfo = data.items.map((item) => {
                        return item.volumeInfo;
                    });
                    dispatch(foundBooks(initArrFoundBooks.concat(booksInfo)));
                    dispatch(allFoundBooks(data));
                    if (booksInfo.length < 32) {
                        dispatch(startIndexLoadMoreBooks(booksInfo.length));
                    } else {
                        dispatch(startIndexLoadMoreBooks(32));
                    }
                } else {
                    return null;
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                dispatch(hideLoadingMoreBooks());
            });
    };
};

export const handlerGetBooks = (value, startIndex) => {
    return (dispatch) => {
        dispatch(showLoading());
        return booksApi
            .getBooks(value, startIndex)
            .then((data) => {
                console.log(data);
                if (data.totalItems !== 0) {
                    const booksInfo = data.items.map((item) => {
                        return item.volumeInfo;
                    });
                    dispatch(foundBooks(booksInfo));
                    dispatch(allFoundBooks(data));
                } else {
                    dispatch(showNotFound());
                    dispatch(foundBooks([]));
                    dispatch(allFoundBooks({}));
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                dispatch(hideLoading());
            });
    };
};
export const handlerShowBookCategories = (categories) => {
    return () => {
        if (Array.isArray(categories)) {
            return categories.map((item) => {
                const arrCategories = item.split(" ");
                return arrCategories.slice(0, 1);
            });
        }
    };
};
