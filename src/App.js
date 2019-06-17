import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Student } from "./Student";
import { Campus } from "./components/Campus";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});

const App = () => {
  return (
    //wrapper for components
    <Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/campus" component={Campus} />
            <Route path="/student" component={Student} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </Fragment>
  );
};

export default connect(mapStateToProps)(App);
