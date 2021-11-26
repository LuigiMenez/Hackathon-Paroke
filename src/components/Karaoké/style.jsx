import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 99.4vw;
`;

export const Header = styled.div`
  background: url(${(props) => props.backgroundVideo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 30vh;
  display: grid;
  grid-template-columns: 0fr 1.1fr;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding-bottom: 95px;
  padding-right: 122px;
  font-family: 'Comfortaa', cursive;
`;

export const View = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Lyrics = styled.div`
  color: white;
  height: 65vh;
  max-width: 50vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-family: 'Comfortaa', cursive;
  text-align: center;
  justify-content: center;
  padding-left: 130px;
  padding-top: 23px;
`;

export const Video = styled.div`
  padding-top: 15px;
  padding-left: 35px;
`;
