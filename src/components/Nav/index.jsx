import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Styles from './styles';

const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <div>
            <li className="pl-3">
              <Link to="/">
                <Styles.Img src="https://user-images.githubusercontent.com/47111708/96376218-9bdb6c00-114b-11eb-942e-d5f8d7e66cfd.png" alt='logo' />
              </Link>
            </li>
          </div>
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