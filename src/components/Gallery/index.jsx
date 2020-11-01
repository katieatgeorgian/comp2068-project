import React, {useEffect} from 'react';
import { Card } from 'react-bootstrap';

// import GalleryCard from '../shared/Card';
import Footer from '../shared/Footer';
import Styles from './styles';
import Button from '../shared/Button';

let data = require("../../dummyData.json");
console.log(data);

const Gallery = () => {

  useEffect(() => {
    /* gallery images */
    var flipCard = document.querySelectorAll(".flip-card");
    var flipInner = [...document.querySelectorAll(".flip-card-inner")];

    for (var i = 0; i < flipCard.length; i++) {
      flipCard[i].addEventListener("mouseover", flip(i));
    }

    function flip(i) {
      return function() {
        flipInner[i].style.transform = "rotateY(180deg)";
      };
    }

    for (var i = 0; i < flipCard.length; i++) {
      flipCard[i].addEventListener("mouseout", flipBack(i));
    }

    function flipBack(i) {
      return function() {
        flipInner[i].style.transform = "rotateY(0deg)";
      };
    }
  });


  return (
    <>
      <Styles.GalleryDiv>
        <div className="gallerySection">
        {Object.values(data).map((art, i) => {
        console.log(art);
          return (
              <div key={i} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      alt={art.title}
                      src={art.img}
                    />
                    <h4>{art.title}</h4>
                  </div>
                  <div className="flip-card-back">
                    <p>Artist: {art.artist}</p>
                    <p>Email: {art.email}</p>
                    <Button className="flip-button" href='mailto:${art.email}' label="Contact Artist"></Button>
                  </div>
                </div>
              </div>
             /* <>
             <div key={i} className="box">
              <img
                alt={art.title}
                src={art.img}
              />
              <h4>{art.title}</h4>
           
              <div className="hid-box">
                <p>`Artist: {art.artist}`</p>
                <a className="flip-button" href='mailto:${art.email}'>Contact Artist</a>
              </div>
              </div>
              </> */
          );
            
        })}
      </div>
      </Styles.GalleryDiv>
      <Footer />
    </>
  );
}

export default Gallery;