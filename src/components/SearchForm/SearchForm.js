import "./SearchForm.css";

import { useDispatch, useSelector } from "react-redux";
import {
    handlerGetBooks,
    hideNotFound,
    startIndexLoadMoreBooks,
    valueForLoadMoreBooks,
    valuesInput,
} from "../../redux/Actions/appAction";
import SelectBooks from "../SelectBooks/SelectBooks";

const SearchForm = () => {
    const dispatch = useDispatch();
    const values = useSelector((state) => state.books.values);
    const startIndex = useSelector((state) => state.books.startIndex);

    const categoriesBooks = [
        { value: "all", selected: "all" },
        { value: "art" },
        { value: "biography" },
        { value: "computers" },
        { value: "history" },
        { value: "medical" },
        { value: "poetry" },
    ];
    const sortingBooks = [{ value: "relevance", selected: "relevance" }, { value: "newest" }];

    const handlerChange = (event) => {
        const { name, value } = event.target;
        dispatch(valuesInput({ ...values, [name]: value }));
    };

    const handlerSubmit = (evt) => {
        evt.preventDefault();
        dispatch(hideNotFound());
        dispatch(handlerGetBooks(values, startIndex));
        dispatch(startIndexLoadMoreBooks(32));
        dispatch(valueForLoadMoreBooks(values));
        dispatch(valuesInput({ ...values, search: "" }));
    };

    return (
        <div className="searchForBooks">
            <h1 className="searchForBooks__title">Search for books</h1>
            <form className="searchForm" onSubmit={handlerSubmit}>
                <input
                    type="search"
                    className="searchForm__input"
                    name="search"
                    id="search"
                    required
                    value={values.search || ""}
                    onChange={handlerChange}
                />
                <button type="submit" className="searchForm__button">
                    {/*<img src="/src/images/magnifier.svg" alt="иконка поиска"/>*/}
                </button>
                <div className="searchForm__container-selectBooks">
                    <SelectBooks
                        typeSelect={categoriesBooks}
                        title="Categories"
                        handlerChange={handlerChange}
                        nameSelect="categories"
                    />
                    <SelectBooks
                        typeSelect={sortingBooks}
                        title="Sorting by"
                        handlerChange={handlerChange}
                        nameSelect="sorting"
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
