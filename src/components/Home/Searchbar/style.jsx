import styled from 'styled-components';

const SSearchBar = styled.form`
  height: 4vh;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  border-collapse: separate;
  perspective: 1px;
  overflow: hidden;
  width: fit-content;
  margin-top: 20vh;

  input {
    border: none;
    height: 100%;
    width: 50vw;
    padding-left: 5vw;
  }

  input:focus {
    outline: none;
  }

  button {
    height: 100%;
    border: none;
    background: rgb(255, 255, 255);
    padding: 0 10px;
    img {
      height: 70%;
      opacity: 75%;
      padding-left: 10px;
    }
  }
`;

export default SSearchBar;
