import "./ButtonLoadMoreBooks.css";
import LoaderLoadMoreBooks from "../LoaderLoadMoreBooks/LoaderLoadMoreBooks";
import { useDispatch, useSelector } from "react-redux";
import { handlerShowLoadMoreBooks } from "../../redux/Actions/appAction";

const ButtonLoadMoreBooks = () => {
    const dispatch = useDispatch();
    const loadingMoreBooks = useSelector((state) => state.app.loadingMoreBooks);
    const notFound = useSelector((state) => state.books.notFound);
    const allFoundBooks = useSelector((state) => state.books.allFoundBooks);
    const showFoundBooks = useSelector((state) => state.books.foundBooks);
    const startIndexLoadMoreBooks = useSelector((state) => state.books.startIndexLoadMoreBooks);
    const valueForLoadMoreBooks = useSelector((state) => state.books.valueForLoadMoreBook);

    const handlerLoadMoreBooks = () => {
        dispatch(handlerShowLoadMoreBooks(valueForLoadMoreBooks, startIndexLoadMoreBooks, showFoundBooks));
    };

    return notFound || showFoundBooks.length === 0 || allFoundBooks.totalItems === showFoundBooks.length ? null : (
        <button className="books__load-more-button" type="button" onClick={handlerLoadMoreBooks}>
            {loadingMoreBooks ? <LoaderLoadMoreBooks /> : "Load more"}
        </button>
    );
};

export default ButtonLoadMoreBooks;
