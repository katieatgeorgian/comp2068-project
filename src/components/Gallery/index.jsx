import React, {useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';


import Footer from '../shared/Footer';
import Styles from './styles';
import Button from '../shared/Button';
import ModalGallery from '../shared/Modal';

let data = require("../../dummyData.json");
console.log(data);

const Gallery = () => {

  const [open, setOpen] = useState(false);

  const handleClose = (index) => {
    console.log('closing');
    setOpen(false);
    console.log(open);
  }
  const handleShow = (index) => {
      setOpen(true);
      console.log('open says me');
  }


  return (
    <>
      <Styles.GalleryDiv>
        <div className="gallerySection">
        {Object.values(data).map((art, i) => {
        console.log(art);
          return (
            <>
              {open && 
                <ModalGallery show={open} artist={art.artist} title={art.title} category={art.category} image={art.img} close={handleClose}></ModalGallery>
                }
              <div data-key={i} key={i} className="galleryCard" onClick={handleShow}>
 
                    <img
                      alt={art.title}
                      src={art.img}
                      style={{width: "75%"}}
                    />
                    <h4>{art.title}</h4>
               
                </div>
                
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