import React from 'react';
import { Card } from 'react-bootstrap';

const GalleryCard = (src, title) => {

  return (
    <Card>
      <Card.Img 
        
        src={src} 
        width="100" 
        alt={`Image of ${title}`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
 
export default GalleryCard;
