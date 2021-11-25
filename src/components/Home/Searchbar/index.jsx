import { useEffect } from 'react';
import PropTypes from 'prop-types';
import tracks from '../../../db';
import SSearchBar from './style';
import searchIcon from '../../../assets/SearchIcon.png';

export default function SearchBar({
  needle,
  setNeedle,
  title,
  setTitle,
  artist,
  setArtist,
  video,
  setVideo,
}) {
  useEffect(() => {
    const result = tracks.filter((track) =>
      track.title.toUpperCase().includes(needle.toUpperCase())
    );
    setTitle(result[0].title);
    setVideo(result.video);
    setArtist(result.artist);
    console.log(title);
  }, [needle]);

  console.log(title);
  console.log(artist);
  console.log(video);
  return (
    <SSearchBar
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="search"
        id="mySearch"
        name="title"
        value={needle}
        onChange={(e) => {
          return setNeedle(e.target.value);
        }}
      />
      <button type="submit">
        <img src={searchIcon} alt="Search icon" />
      </button>
      <ul>coucou</ul>
    </SSearchBar>
  );
}

SearchBar.propTypes = {
  needle: PropTypes.string,
  setNeedle: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  artist: PropTypes.string,
  setArtist: PropTypes.func,
  video: PropTypes.string,
  setVideo: PropTypes.func,
};
SearchBar.defaultProps = {
  needle: '',
  setNeedle: () => {},
  title: '',
  setTitle: () => {},
  artist: '',
  setArtist: () => {},
  video: '',
  setVideo: () => {},
};
