import { Reset } from 'styled-reset';
import GlobalStyle from 'GlobalStyle';
import Home from './components/Home';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
