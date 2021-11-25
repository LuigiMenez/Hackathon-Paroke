import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, Title, Lyrics } from './style';
import backgroundVideo from '../../assets/backgroundVideo.jpeg';

// const data = {
//   title: 'moi',
//   artiste: 'moi',
// };

export default function Karaoké() {
  // const [videos, setVideos] = useState([]);
  const [lyrics, setLyrics] = useState();

  useEffect(() => {
    axios.get('https://api.lyrics.ovh/v1/Beyonce/Halo').then(({ data }) => {
      console.log(data.lyrics);
      const sLyrics = data.lyrics.split('\n').map((row) => {
        return <p>{row}</p>;
      });
      setLyrics(sLyrics);
    });
  }, []);

  return (
    <Container>
      <Header backgroundVideo={backgroundVideo}>
        <Title>{/* {data.title} - {data.artiste} */}Beyonce - Halo</Title>
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
      <Lyrics>{lyrics}</Lyrics>
    </Container>
  );
}
