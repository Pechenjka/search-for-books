import "./FoundBooks.css";
import { useDispatch, useSelector } from "react-redux";
import { handlerShowLoadMoreBooks } from "../../redux/Actions/appAction";
import { Fragment } from "react";
import Loader from "../Loader/Loader";
import LoaderLoadMoreBooks from "../LoaderLoadMoreBooks/LoaderLoadMoreBooks";

const FoundBooks = () => {
    const dispatch = useDispatch();
    const showFoundBooks = useSelector((state) => state.books.foundBooks);
    const loading = useSelector((state) => state.app.loading);
    const loadingMoreBooks = useSelector((state) => state.app.loadingMoreBooks);
    const notFound = useSelector((state) => state.books.notFound);
    const allFoundBooks = useSelector((state) => state.books.allFoundBooks);
    const startIndexLoadMoreBooks = useSelector((state) => state.books.startIndexLoadMoreBooks);
    const valueForLoadMoreBooks = useSelector((state) => state.books.valueForLoadMoreBook);
    const handlerAllFoundBooks = Object.keys(allFoundBooks).length === 0 ? 0 : allFoundBooks.totalItems;

    const handlerLoadMoreBooks = () => {
        dispatch(handlerShowLoadMoreBooks(valueForLoadMoreBooks, startIndexLoadMoreBooks, showFoundBooks));
    };

    const handlerShowBookCategories = (categories) => {
        if (Array.isArray(categories)) {
            return categories.map((item) => {
                const arrCategories = item.split(" ");
                return arrCategories.slice(0, 1);
            });
        }
    };

    return (
        <div className="books">
            <h5 className="books__title">Found {handlerAllFoundBooks} results</h5>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    {notFound ? (
                        <p className="books__not-found">Not found</p>
                    ) : (
                        showFoundBooks.map((book, index) => {
                            return (
                                <div className="book" key={index}>
                                    <img
                                        src={book.imageLinks ? book.imageLinks.thumbnail : null}
                                        className="book__image"
                                        alt={book.imageLinks ? "Картинка" : "Картинка отсутствует"}
                                    />
                                    <div className="book__body">
                                        <p className="book__categories">{handlerShowBookCategories(book.categories)}</p>
                                        <h3 className="book__title">{book.title}</h3>
                                        <p className="book__author">
                                            {Array.isArray(book.authors)
                                                ? book.authors.map((item) => {
                                                      return ` ${item}`;
                                                  })
                                                : (book.authors = "")}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    )}

                    { notFound || showFoundBooks.length === 0 || allFoundBooks.totalItems === showFoundBooks.length ? null : (
                        <button className="books__load-more-button" type="button" onClick={handlerLoadMoreBooks}>
                            {loadingMoreBooks ? <LoaderLoadMoreBooks /> : "Load more"}
                        </button>
                    )}
                </Fragment>
            )}
        </div>
    );
};

export default FoundBooks;
