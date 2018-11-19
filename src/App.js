import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Loadable from 'react-loadable';
import { withRouter } from 'react-router';
import { Route, Switch, NavLink } from 'react-router-dom';

/*
const AsyncComponent = Loadable({
  loader: () => import("./SomeComponent"),
  loading: () => <div>loading...</div>,
});
*/
const AsyncComponent = Loadable({
  loader: () => import(/* webpackChunkName: "myNamedChunk" */ './SomeComponent'),
  loading: () => <div>loading...</div>,
  modules: ['myNamedChunk']
});

const AsyncPageDefault = Loadable({
  loader: () => import(/* webpackChunkName: "pageDefault" */ './PageDefault'),
  loading: () => <div>loading page...</div>,
  modules: ['pageDefault'],
});
const AsyncPageAnother = Loadable({
  loader: () => import(/* webpackChunkName: "pageAnother" */ './PageAnother'),
  loading: () => <div>loading another page...</div>,
  modules: ['pageAnother'],
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>

        <h2>Part 1: Async component</h2>
        <AsyncComponent />
        <hr />
        <h2>Part 2: React router</h2>

        <nav>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/another" activeClassName="active">Another page</NavLink>
        </nav>
        <Switch>
          <Route path="/" exact component={AsyncPageDefault} />
          <Route path="/another" component={AsyncPageAnother} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
