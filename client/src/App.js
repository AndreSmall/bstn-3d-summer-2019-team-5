import React from 'react';
import NavBar1 from './component/NavBar/NavBar1'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Card from './component/Card/Card.js';
import Graph1Page from './component/Graph1Page/Graph1Page.js';
import Graph2Page from './component/Graph2Page/Graph2Page.js';
import Graph3Page from './component/Graph3Page/Graph3Page.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Graph1Page} />
          <Route exact path='/graph-2' component={Graph2Page} />
          <Route exact path='/graph-3' component={Graph3Page} />
          <Route exact path='/graph-4' component={Card} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
