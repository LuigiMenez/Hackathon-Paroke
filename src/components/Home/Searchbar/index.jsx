import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchIcon from '../../../assets/SearchIcon.png';
import tracks from '../../../db';
import SSearchBar from './style';

export default function SearchBar({
  needle,
  setNeedle,
  results,
  setResults,
  setTrack,
}) {
  const [artists, setArtists] = useState([]);

  function removeDuplicates(array) {
    const unique = {};
    array.forEach((i) => {
      if (!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

  useEffect(() => {
    if (needle.length) {
      setResults(
        tracks.filter(
          (t) =>
            t.title.toUpperCase().includes(needle.toUpperCase()) ||
            t.artist.toUpperCase().includes(needle.toUpperCase())
        )
      );
      results.forEach((result) => {
        setArtists(artists.push(result.artist));
      });
      setArtists(removeDuplicates(artists));
    } else {
      setResults([]);
    }
  }, [needle]);

  return (
    <SSearchBar>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="search"
          id="mySearch"
          name="title"
          placeholder="Type your song or artist name ..."
          value={needle}
          onChange={(e) => {
            return setNeedle(e.target.value);
          }}
        />
        <button type="submit">
          <img src={searchIcon} alt="Search icon" />
        </button>
      </form>
      {needle.length ? (
        <div>
          <ul className="titles">
            <p>Titles</p>
            {results.map((result) => {
              return (
                <Link
                  to={`/karaoke/${result.title}`}
                  onClick={() => {
                    setTrack(result);
                  }}
                >
                  <li>{result.title}</li>
                </Link>
              );
            })}
          </ul>
          <ul className="artists">
            <p>Artists</p>
            {artists.map((a) => {
              return (
                <Link to={`/artist/${a}`}>
                  <li>{a}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      ) : null}
    </SSearchBar>
  );
}

SearchBar.propTypes = {
  needle: PropTypes.string,
  setNeedle: PropTypes.func,
  results: PropTypes.arrayOf(PropTypes.string),
  setResults: PropTypes.func,
  setTrack: PropTypes.func,
};
SearchBar.defaultProps = {
  needle: '',
  setNeedle: () => {},
  results: [],
  setResults: () => {},
  setTrack: () => {},
};
