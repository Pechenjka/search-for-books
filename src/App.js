import { Switch, Route } from "react-router-dom";
import FoundBooks from "./components/FoundBooks/FoundBooks";
import BookDescription from "./components/BookDescription/BookDescription";
import NotFound from "./components/NotFound/NotFound";

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
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    );
};

export default App;
