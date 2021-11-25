import { Reset } from 'styled-reset';
import GlobalStyle from 'GlobalStyle';
import Home from './components/Home';
import Karaoké from './components/Karaoké';

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Home />
      <Karaoké />
    </>
  );
}
