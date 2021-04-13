import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  render () {
    return (
     <BrowserRouter >
      <NavBar />
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition 
            key={location.key}
            timeout={500}
            classNames="fade"
            >
            <Switch>
              <Route component={Home} path='/' exact />
              <Route component={About} path='/about' />
              <Route component={Contact} path='/contact' />
              <Route component={Project} path='/project' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
     </BrowserRouter>
    );
  }
}

export default App;
