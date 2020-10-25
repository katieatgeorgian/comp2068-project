import React from 'react';

import {Link} from 'react-router-dom';

import Styles from './styles';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <Styles.Img src="https://user-images.githubusercontent.com/47111708/96376218-9bdb6c00-114b-11eb-942e-d5f8d7e66cfd.png" alt='logo' />
      </Link>
    </div>
  );
}

export default Logo;