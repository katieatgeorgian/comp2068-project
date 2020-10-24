import styled from 'styled-components';

export default {
  Nav: styled.nav`
    background: #1f2833;
    display: flex;
    align-items: center;
    height: 80px;
    padding-top: 1rem;
    border-bottom: 0.5px outset #45a29e;

    ul {
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      width: 100%;

      div:last-of-type {
        margin: auto 0;
        display: flex;
        margin-right: 3rem;
    
      li {
        list-style: none;

        a {
          color: #66fcf1;
          text-decoration: none;
          padding: 1em;

          &:hover {
            color: #45a29e;
          }
        }
      }
    }
    }
  `,

  Img: styled.img`
    height: 80px;
    width: auto;
    display: flex;
    align-items: center;
  `
};