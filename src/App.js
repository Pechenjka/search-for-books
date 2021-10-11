import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";
import FoundBooks from "./components/FoundBooks/FoundBooks";

const App = () => {
    return (
        <div className="app">
            <SearchForm />
            <FoundBooks />
        </div>
    );
};

export default App;
