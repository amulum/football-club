import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "../store/store";
// PAGES
import Home from "../Pages/Home"
import Competition from "../Pages/Competition"
import ClubDetails from "../Pages/ClubDetails";
import PlayerDetails from "../Pages/PlayerDetails";
import Club from "../Pages/Club";

const MainRoute = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:area" component={Competition} />
          <Route exact path="/:area/:competition" component={Club} />
          <Route exact path="/club/:club" component={ClubDetails} />
          <Route exact path="/club/:club/:player" component={PlayerDetails} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoute;
