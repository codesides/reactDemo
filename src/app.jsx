import React from "react";
/**
 * HashRouter
 * BrowserRouter
 */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Nav from "./componens/Nav";
import Home from "./pages/Home";
import Mine from "./pages/Mine";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Book from "./pages/books/Book";
import WebBook from "./pages/books/WebBook";
import JavaBook from "./pages/books/JavaBook";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* exact表示指定path只有在访问'/'的时候才展示 */}
        <Redirect from="/home" to="/" />
        <Route path="/book">
          <Book>
            <Route path="/book/webbook" component={WebBook} />
            <Route path="/book/javabook" component={JavaBook} />
          </Book>
        </Route>
        <Route exact strict path="/detail/:id?/:name?" component={Detail} />
        <Route exact strict path="/mine" component={Mine} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
