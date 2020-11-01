import styled from 'styled-components';

export default {
  GalleryDiv: styled.div`
    margin-left: 13rem;
    margin-top: 3rem;
    
    .gallerySection{
      display:flex;
      flex-wrap: wrap;
    }
    div.card {
      width: 40% !important;
      margin: 1rem;
    }
    div.card-body {
      text-align: center;
    }

    /* Flip Cards */
.flip-card {

  height: 35vh;
  width: 40% !important;
      margin: 1rem;
  text-align: center;
  background-color: transparent;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card img {
  margin-top: 1rem;
  width: 75%;
  height: auto;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: transparent;
  color: #535353;
  line-height: 136px;
  padding: 10px;
  vertical-align: middle;
}

.flip-card-back {
  background-color: transparent;
  color: #560829;
  transform: rotateY(180deg);
  padding-top: 10%;
    }
  `,
};