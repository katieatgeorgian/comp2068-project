import React from 'react';
import Footer from '../shared/Footer';
import Styles from './styles';
import Button from '../shared/Button';

const Home = () => {
  return (
    <>
    <Styles.Div>
      <Styles.OverlayDiv>
      <p>Home Page</p>
      <Button href="/contact" label="View Gallery"></Button>
      </Styles.OverlayDiv>
    </Styles.Div>
      <Footer />
    </>
  );
}
 
export default Home;