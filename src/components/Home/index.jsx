import PropTypes from 'prop-types';
import SHome from './style';
import background from '../../assets/background.jpeg';
import SearchBar from './Searchbar';

export default function Home({
  needle,
  setNeedle,
  title,
  setTitle,
  artist,
  setArtist,
  video,
  setVideo,
}) {
  return (
    <SHome background={background}>
      <div className="logo">
        <h1>Paroké</h1>
      </div>
      <SearchBar
        needle={needle}
        setNeedle={setNeedle}
        title={title}
        setTitle={setTitle}
        artist={artist}
        setArtist={setArtist}
        video={video}
        setVideo={setVideo}
      />
    </SHome>
  );
}

Home.propTypes = {
  needle: PropTypes.string,
  setNeedle: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  artist: PropTypes.string,
  setArtist: PropTypes.func,
  video: PropTypes.string,
  setVideo: PropTypes.func,
};
Home.defaultProps = {
  needle: '',
  setNeedle: () => {},
  title: '',
  setTitle: () => {},
  artist: '',
  setArtist: () => {},
  video: '',
  setVideo: () => {},
};
