import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Group from "containers/Group";
import UserStatistic from "containers/UserStatistic";
import GameTable from "containers/GameTable";
import Game from "containers/Game";
import SignIn from "containers/Login/SignIn";
import SignUp from "containers/Login/SignUp";
import { ProvideAuth } from "hooks/user-auth.js";
import Room from "containers/Room";

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <Switch>
            <Route path="/signin" exact>
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/statistic-user">
              <UserStatistic />
            </Route>
            <Route path="/group/game-table" exact component={GameTable} />
            <Route path="/group" component={Group} />
            <Route path="/room">
              <Room />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}
