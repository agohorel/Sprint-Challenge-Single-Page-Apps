import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";

export default function App() {
  return (
    <main>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage></WelcomePage>
          </Route>
          <Route path="/characters">
            <CharacterList></CharacterList>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
