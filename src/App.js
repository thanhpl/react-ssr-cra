import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Loadable from 'react-loadable';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        
        <AsyncComponent />
      </div>
    );
  }
}

export default App;
