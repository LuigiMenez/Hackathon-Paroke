import { Reset } from 'styled-reset';
import GlobalStyle from 'GlobalStyle';
import Karaoké from './components/Karaoké';

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Karaoké />
    </>
  );
}
