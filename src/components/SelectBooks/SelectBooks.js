import "./SelectBooks.css";
import {useSelector} from "react-redux";
const SelectBooks = ({ typeSelect, title, handlerChange, nameSelect }) => {
    const values = useSelector((state) => state.books.values);

    return (
        <div className="selectBooks">
            <p className="selectBooks__title">{title}</p>
            <select className="selectBooks__select" name={nameSelect} id={nameSelect} onChange={handlerChange}>
                {typeSelect.map((item, index) => {
                    return (
                        <option key={index} value={item.value} selected={item.value === values.categories}>
                            {item.value}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default SelectBooks;
