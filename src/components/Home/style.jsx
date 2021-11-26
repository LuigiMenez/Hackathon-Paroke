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
  .logo {
    margin-top: 25vh;
    background-color: #000000;
    width: 50vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    h1 {
      color: yellow;
    }
  }
  @media only screen and (min-width: 600px) {
    .logo {
      width: 35vw;
      height: 150px;
    }
  }
`;
export default SHome;
