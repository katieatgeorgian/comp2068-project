import React from 'react';
import { Card } from 'react-bootstrap';


import Footer from '../shared/Footer';
import Styles from './styles';

import GalleryCard from '../shared/Card';

let data = require("../../dummyData.json");
console.log(data);
console.log(typeof data)

const Gallery = () => {

  return (
    <>
      <Styles.GalleryDiv>
        <div className="gallerySection">
        {Object.values(data).map((art, i) => {
        console.log(art);
          return (
            <>
              <GalleryCard title={art.title} img={art.img} email={art.email} artist={art.artist} category={art.category} i={i}></GalleryCard>
            </>
          );
        })}
      </div>
      </Styles.GalleryDiv>
      <Footer />
    </>
  );
}

export default Gallery;