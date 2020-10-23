import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search" exact>
        <SearchPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
