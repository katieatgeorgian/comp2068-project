import React from 'react';

import Layout from '../shared/Layout';
import Footer from '../shared/Footer';
import Styles from './styles';

const Contact = () => {
  return (
    <>
    <Layout>
      <Styles.ContactDiv>
        <Styles.ContactOverlay>
          <p>Contact</p>
        </Styles.ContactOverlay>
      </Styles.ContactDiv>
    </Layout>
    <Footer />
    </>
  );
}
 
export default Contact;