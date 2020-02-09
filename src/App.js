import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";

export default function App() {
  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route path="/characters">
            <CharacterList></CharacterList>
          </Route>
          <Route path="/">
            <WelcomePage></WelcomePage>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
