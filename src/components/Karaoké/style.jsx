import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.div`
  background: url(${(props) => props.backgroundVideo});
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
`;

export const Video = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Lyrics = styled.div`
  color: white;
  height: 60vh;
  width: 30vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 18px;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;
