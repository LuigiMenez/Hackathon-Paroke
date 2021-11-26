import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Container, Header, Title, Lyrics } from './style';
import backgroundVideo from '../../assets/backgroundVideo.jpeg';

// import db from '../../db';

export default function Karaoké({ track }) {
  // const [videos, setVideos] = useState([]);
  const [lyrics, setLyrics] = useState();

  useEffect(() => {
    axios.get('https://api.lyrics.ovh/v1/Beyonce/Halo').then(({ data }) => {
      const sLyrics = data.lyrics.split('\n').map((row) => {
        return <p>{row}</p>;
      });
      setLyrics(sLyrics);
    });
  }, []);

  return (
    <Container>
      <Header backgroundVideo={backgroundVideo}>
        <Title>{track.title}</Title>
      </Header>
      {/* <>
        {lyrics.map((e) => {
          return (
            <>
              <Video>{e.data.lyrics}</Video>
            </>
          );
        })}
      </> */}
      <ReactPlayer url={track.video} width="100vw" height="33.5vw" />
      <Lyrics>{lyrics}</Lyrics>
    </Container>
  );
}

Karaoké.propTypes = {
  track: PropTypes.shape,
};
Karaoké.defaultProps = {
  track: {},
};
