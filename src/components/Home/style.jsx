import styled from 'styled-components';

const SHome = styled.main`
  background: url(${(props) => props.background});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logoBorder {
    margin-top: 18.85vh;
    background-color: #fef82a;
    width: 35vw;
    height: 150px;
    font-size: 40px;
    font-family: 'Comfortaa', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    z-index: 2;
    .logo {
      background-color: #000000;
      width: 34.1vw;
      height: 146px;
      font-size: 40px;
      font-family: 'Comfortaa', cursive;
      display: flex;
      justify-content: center;
      align-items: center;
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      z-index: 3;
      h1 {
        color: #fef82a;
        z-index: 5;
      }
    }
    @media only screen and (max-width: 500px) {
      .logo {
        width: 65vw;
        height: 150px;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .logoBorder {
      width: 60vw;
      height: 150px;
    }
  }
`;
export default SHome;
