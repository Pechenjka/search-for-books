import "./SelectBooks.css";
import {useSelector} from "react-redux";
const SelectBooks = ({ typeSelect, title, handlerChange, nameSelect }) => {
    const values = useSelector((state) => state.books.values);

    return (
        <div className="selectBooks">
            <p className="selectBooks__title">{title}</p>
            <select className="selectBooks__select" name={nameSelect} id={nameSelect} onChange={handlerChange} defaultValue={values.categories}>
                {typeSelect.map((item, index) => {
                    return (
                        <option key={index} value={item.value} >
                            {item.value}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default SelectBooks;
