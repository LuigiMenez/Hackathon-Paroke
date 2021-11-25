import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import searchIcon from '../../../assets/SearchIcon.png';

export default function SearchBar({ needle, setNeedle, results, setResults }) {
  useEffect(() => {
    if (needle.length) {
      setResults(
        tracks.filter(
          (track) =>
            track.title.toUpperCase().includes(needle.toUpperCase()) ||
            track.artist.toUpperCase().includes(needle.toUpperCase())
        )
      );
      console.log(needle);
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
        <ul>
          {results.map((result) => {
            return (
              <Link to="/karaoke">
                <li>{result.title}</li>
              </Link>
            );
          })}
        </ul>
      ) : null}
    </SSearchBar>
  );
}

SearchBar.propTypes = {
  needle: PropTypes.string,
  setNeedle: PropTypes.func,
  results: PropTypes.arrayOf(PropTypes.string),
  setResults: PropTypes.func,
};
SearchBar.defaultProps = {
  needle: '',
  setNeedle: () => {},
  results: [],
  setResults: () => {},
};
