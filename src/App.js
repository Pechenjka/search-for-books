import { Switch, Route } from "react-router-dom";
import FoundBooks from "./components/FoundBooks/FoundBooks";
import BookDescription from "./components/BookInformation/BookDescription";

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/">
                    <FoundBooks />
                </Route>
                <Route exact path="/book">
                    <BookDescription />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
