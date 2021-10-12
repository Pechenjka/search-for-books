import "./BookDescription.css";
import { Fragment } from "react";
import SearchForm from "../SearchForm/SearchForm";
import { useSelector } from "react-redux";
import Book from "../Book/Book";

const BookDescription = () => {
    const bookDescription = useSelector((state) => state.books.bookDescription);

    const classesForBooksDescription = {
        bookContainer: "bookDescription__container",
        imageContainer: "bookDescription__image-container",
        image: "bookDescription__image",
        body: "bookDescription__body",
        categories: "bookDescription__categories",
        title: "bookDescription__title",
        author: "bookDescription__author",
        description: "bookDescription__description",
        descriptionContainer: "bookDescription__description-container",
        button: "bookDescription__button"
    };

    return (
        <Fragment>
            <SearchForm />
            <Book book={bookDescription} classes={classesForBooksDescription} />
        </Fragment>
    );
};

export default BookDescription;
