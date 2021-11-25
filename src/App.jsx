import { Reset } from 'styled-reset';
import GlobalStyle from 'GlobalStyle';
import Home from './components/Home';

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Home />
    </>
  );
}
