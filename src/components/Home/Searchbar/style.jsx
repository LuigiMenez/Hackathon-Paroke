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
    margin-top: 14vh;
    input {
      border: none;
      height: 100%;
      width: 50vw;
      padding-left: 5vw;
      font-size: 1.3rem;
      background-image: linear-gradient(
        -225deg,
        #ec1004 0%,
        #fef82a 16%,
        #4bf54c 30%,
        #05edf9 47%,
        #3233f0 68%,
        #9b21c2 100%
      );
      color: black;
    }
    input:focus {
      outline: none;
    }
    button {
      height: 100%;
      border: none;
      background: rgb(0, 0, 0);
      border: solid 2px #9b21c2;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      padding: 0 10px;
      img {
        height: 70%;
        opacity: 100%;
        color: #fef82a;
        padding-top: 3px;
        padding-right: 3px;
      }
    }
  }
  div {
    display: flex;
    font-family: 'Comfortaa', cursive;

    .titles {
      background: rgba(0, 0, 0, 0.8);
      border: solid 1px #fef82a;
      border-radius: 10px;
      color: #fef82a;
    }
    .artists {
      left: 50vw;
      background: rgba(0, 0, 0, 0.8);
      border: solid 1px #fef82a;
      border-radius: 10px;
      color: #fef82a;
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
        text-decoration: underline;
      }
      a {
        text-decoration: none;
        li {
          color: #fef82a;
          padding-bottom: 5px;
          :hover {
            font-size: 1.32rem;
          }
        }
      }
    }
  }
`;
export default SSearchBar;
