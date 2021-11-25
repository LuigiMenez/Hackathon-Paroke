import SHome from './style';
import background from '../../assets/background.jpeg';
import SearchBar from './Searchbar';

export default function Home() {
  return (
    <SHome background={background}>
      <div className="logo">
        <h1>Paroké</h1>
      </div>
      <SearchBar />
    </SHome>
  );
}
