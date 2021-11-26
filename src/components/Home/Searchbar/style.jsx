import styled from 'styled-components';

const SSearchBar = styled.div`
  form {
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
      font-size: 1.3rem;
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
  }
  div {
    display: flex;
    .artists {
      left: 50vw;
    }
    ul {
      width: 25vw;
      height: auto;
      background: white;
      position: absolute;
      margin-top: 10px;
      text-align: left;
      padding: 10px;

      p {
        padding-bottom: 1rem;
        font-weight: bold;
      }
      a {
        text-decoration: none;
        li {
          color: black;
          padding-bottom: 5px;
          :hover {
            background: #eeeded;
          }
        }
      }
    }
  }
`;
export default SSearchBar;
