import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react/cjs/react.development';
import tracks, { artists } from '../../db';
import { Container, Header, Title, Albums } from './style';
import backgroundHeader from '../../assets/backgroundVideo.jpeg';

export default function Artist({ setTrack }) {
  const [albums, setAlbums] = useState([]);
  const { artist } = useParams();
  useEffect(() => {
    const currentArtist = artists.find(
      (a) => a.name.toUpperCase() === artist.toUpperCase()
    );

    setAlbums(currentArtist.infos);
  });

  return (
    <Container>
      <Header backgroundHeader={backgroundHeader}>
        <Title>{artist}</Title>
      </Header>
      <Albums>
        {albums.map((a) => {
          return (
            <div className="album">
              <div className="cover">
                <img src={a.image} alt="" />
                <p>{a.album}</p>
              </div>
              <ul>
                {a.titles.map((title) => {
                  return (
                    <Link
                      to={`/karaoke/${title}`}
                      onClick={() => {
                        setTrack(
                          tracks.find(
                            (t) => t.title.toUpperCase() === title.toUpperCase()
                          )
                        );
                      }}
                    >
                      <li>{title}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </Albums>
    </Container>
  );
}
Artist.propTypes = {
  // track: PropTypes.arrayOf(PropTypes.string),
  setTrack: PropTypes.func,
};
Artist.defaultProps = {
  // // track: [],
  setTrack: () => {},
};
