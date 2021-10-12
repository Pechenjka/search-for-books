import { handlerShowBookCategories, hideBookDescription } from "../../redux/Actions/appAction";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Book = ({ book, classes }) => {
    const dispatch = useDispatch();

    const showBook = useSelector((state) => state.books.book);

    return (
        <div className={classes.bookContainer}>
            <div className={classes.imageContainer}>
                <img
                    src={book.imageLinks ? book.imageLinks.thumbnail : null}
                    className={classes.image}
                    alt={book.imageLinks ? "Картинка" : "Картинка отсутствует"}
                />
            </div>
            <div className={classes.body}>
                <p className={classes.categories}>
                    {showBook ? book.categories : dispatch(handlerShowBookCategories(book.categories))}
                </p>
                <h3 className={classes.title}>{book.title}</h3>
                <p className={classes.author}>
                    {Array.isArray(book.authors)
                        ? book.authors.map((item, index) => {
                              return <span key={index}>{(index ? ", " : "") + item}</span>;
                          })
                        : (book.authors = "")}
                </p>
                {showBook && (
                    <div className={classes.descriptionContainer}>
                        <p className={classes.description}>{book.description}</p>
                    </div>
                )}
            </div>
            {showBook && (
                <Link to="/" onClick={() => dispatch(hideBookDescription())} className={classes.button}>
                    Вернуться к найденым книгам
                </Link>
            )}
        </div>
    );
};

export default Book;
