import React, {useState} from 'react';
import './styles.css';

import ModalGallery from '../Modal';

const GalleryCard = ({title, img, i, artist, category, email}) => {
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    console.log('closing');
    setOpen(false);
  }

  const handleShow = (e) => {
    console.log('open says me');
    const idx = e.target.attributes.getNamedItem('data-tag').value;;
      setOpen(true);
  }
  return (
    <>
    {open && 
      <ModalGallery show={open} artist={artist} title={title} email={email} category={category} image={img} close={handleClose}></ModalGallery>
      }
    <div data-tag={i} key={i} className="galleryCard" onClick={handleShow}>
      <img
        data-tag={i}
        alt={title}
        src={img}
        style={{width: "75%"}}
      />
      <h4 className="mt-1">{title}</h4>
    </div>
    </>
  );
}
 
export default GalleryCard;
