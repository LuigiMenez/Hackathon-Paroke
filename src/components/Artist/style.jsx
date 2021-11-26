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
  flex-direction: row;
  justify-content: center;
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
  font-size: 16px;
  padding: 10vh 10vw;

  .album {
    display: flex;
    width: 500px;
    margin-right: 30px;
    margin-bottom: 60px;
    .cover {
      img {
        width: 300px;
        margin-right: 30px;
      }
    }
    ul {
      width: 300px;
      li {
        padding-bottom: 10px;
        text-align: left;
        :hover {
          color: grey;
          cursor: pointer;
        }
      }
    }
  }
`;
