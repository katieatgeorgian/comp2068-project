import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

import Logo from '../shared/Logo';
import Home from '../Home';
// import Gallery from '../Gallery';
import Category from '../CategorySort';
import About from '../About';
import Contact from '../Contact'
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
            <Link to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
          </div>
        </ul>
      </Styles.Nav>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route exact path="/gallery">
          <Category/>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/contact">
          <Contact/>
        </Route>

      </Switch>
    </Router>
    );
  }

  export default Nav;