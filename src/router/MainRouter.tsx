import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "../components/home/Home";
import Project from "../components/project/Project";

function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project" component={Project} />
      </Switch>
    </BrowserRouter>
  );
}

export default MainRouter;
