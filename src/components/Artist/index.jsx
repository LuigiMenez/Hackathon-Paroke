import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { artists } from '../../db';
import { Container, Header, Title, Albums } from './style';
import backgroundHeader from '../../assets/backgroundVideo.jpeg';
import Btn from '../Btn/Btn';

export default function Artist() {
  const [albums, setAlbums] = useState([]);
  const { artist } = useParams();
  useEffect(() => {
    const currentArtist = artists.find(
      (a) => a.name.toUpperCase() === artist.toUpperCase()
    );
    setAlbums(currentArtist.infos);
    // setAlbums(
    //   artists.filter((a) => a.name.toUpperCase() === artist.toUpperCase())
    // );
    console.log(albums);
  });

  console.log(albums);

  return (
    <Container>
      <Header backgroundHeader={backgroundHeader}>
        <Btn>d</Btn>
        <Title>{artist}</Title>
      </Header>
      <Albums>
        {albums.map((a) => {
          return (
            <div>
              <div>
                <img src={a.image} alt="" />
                <p>{a.album}</p>
              </div>
            </div>
          );
        })}
      </Albums>
    </Container>
  );
}
