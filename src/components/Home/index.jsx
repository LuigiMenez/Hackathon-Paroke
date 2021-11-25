import PropTypes from 'prop-types';
import SHome from './style';
import background from '../../assets/background.jpeg';
import SearchBar from './Searchbar';

export default function Home({ needle, setNeedle, results, setResults }) {
  return (
    <SHome background={background}>
      <div className="logo">
        <h1>Paroké</h1>
      </div>
      <SearchBar
        needle={needle}
        setNeedle={setNeedle}
        results={results}
        setResults={setResults}
      />
    </SHome>
  );
}

Home.propTypes = {
  needle: PropTypes.string,
  setNeedle: PropTypes.func,
  results: PropTypes.arrayOf(PropTypes.string),
  setResults: PropTypes.func,
};
Home.defaultProps = {
  needle: '',
  setNeedle: () => {},
  results: [],
  setResults: () => {},
};
