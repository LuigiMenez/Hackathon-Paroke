import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.div`
  background: url(${(props) => props.backgroundHeader});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 30vh;
  display: flex;
  display: grid;
  grid-template-columns: 0fr 0.93fr;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding-bottom: 45px;
  @media only screen and (max-width: 600px) {
    padding-bottom: 110px;
    padding-right: 35px;
  }
`;

export const Albums = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  font-size: 18px;
  padding: 5vh 5vw;

  .album {
    display: flex;
    width: 300px;
    margin-right: 30px;
    margin-bottom: 60px;
    .cover {
      img {
        width: 100px;
        margin-right: 30px;
      }
    }
    ul {
      width: 300px;
      text-decoration: none;
      a {
        text-decoration: none;
        li {
          padding-bottom: 10px;
          text-align: left;
          color: #c4c4c4;
          :hover {
            color: #ffffff;
            cursor: pointer;
            font-size: 20px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 600px) {
    padding: 10vh 10vw;
    .album {
      width: 500px;
      .cover {
        img {
          width: 300px;
        }
      }
      ul {
        width: 300px;
      }
    }
  }
`;
