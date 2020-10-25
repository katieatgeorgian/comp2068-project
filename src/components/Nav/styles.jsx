import styled from 'styled-components';

export default {
  Nav: styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #64a70b;
    height: 100%;
    width: 12rem; /*200px*/
    list-style: none;
    text-align: center;

    ul {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    list-style: none;

    li {

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
  `
};