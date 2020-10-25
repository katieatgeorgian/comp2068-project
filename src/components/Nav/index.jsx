import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

import Logo from '../shared/Logo';
import Home from '../Home';
import About from '../About';
import Styles from './styles';

const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <Logo />
          <div>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          </div>
        </ul>
      </Styles.Nav>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
    </Router>
    );
  }

  export default Nav;