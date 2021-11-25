import styled from 'styled-components';

const SHome = styled.main`
  background: url(${(props) => props.background});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  .logo {
    background-color: black;
    width: 300px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    margin: auto 0;
    h1 {
      color: yellow;
    }
  }
`;
export default SHome;
