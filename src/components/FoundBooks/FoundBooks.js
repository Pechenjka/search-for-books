import "./FoundBooks.css";
import { useDispatch, useSelector } from "react-redux";
import { bookDescription, showBookDescription } from "../../redux/Actions/appAction";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

import SearchForm from "../SearchForm/SearchForm";
import Book from "../Book/Book";
import ButtonLoadMoreBooks from "../buttonLoadMoreBooks/ButtonLoadMoreBooks";

const FoundBooks = () => {
    const dispatch = useDispatch();
    const showFoundBooks = useSelector((state) => state.books.foundBooks);
    const loading = useSelector((state) => state.app.loading);
    const notFound = useSelector((state) => state.books.notFound);
    const allFoundBooks = useSelector((state) => state.books.allFoundBooks);
    const handlerAllFoundBooks = Object.keys(allFoundBooks).length === 0 ? 0 : allFoundBooks.totalItems;

    const handlerClickTheBook = (book) => {
        dispatch(bookDescription(book));
        dispatch(showBookDescription());
    };

    const classesForFoundBooks = {
        bookContainer: "book__container",
        imageContainer: "book__image-container",
        image: "book__image",
        body: "book__body",
        categories: "book__categories",
        title: "book__title",
        author: "book__author",
    };

    return (
        <Fragment>
            <SearchForm />
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
                                    <Link
                                        className="book__link-container"
                                        to="/book"
                                        key={index}
                                        onClick={() => handlerClickTheBook(book)}
                                    >
                                        <Book book={book} classes={classesForFoundBooks} />
                                    </Link>
                                );
                            })
                        )}
                        <ButtonLoadMoreBooks />
                    </Fragment>
                )}
            </div>
        </Fragment>
    );
};

export default FoundBooks;
