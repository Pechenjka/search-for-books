import "./SelectBooks.css";

const SelectBooks = ({ typeSelect, title, handlerChange, nameSelect }) => {
    return (
        <div className="selectBooks">
            <p className="selectBooks__title">{title}</p>
            <select className="selectBooks__select" name={nameSelect} id={nameSelect} onChange={handlerChange}>
                {typeSelect.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>
                            {item.value}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default SelectBooks;
