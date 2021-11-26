import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Reset } from 'styled-reset';
import GlobalStyle from 'GlobalStyle';
import Karaoké from './components/Karaoké';
import Home from './components/Home';
import Artist from './components/Artist';

export default function App() {
  const [needle, setNeedle] = useState('');
  const [results, setResults] = useState([]);
  const [track, setTrack] = useState([]);

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              needle={needle}
              setNeedle={setNeedle}
              results={results}
              setResults={setResults}
              track={track}
              setTrack={setTrack}
            />
          }
        />
        <Route path="/karaoke/:title" element={<Karaoké track={track} />} />
        <Route
          path="/artist/:artist"
          element={<Artist track={track} setTrack={setTrack} />}
        />
      </Routes>
    </>
  );
}
