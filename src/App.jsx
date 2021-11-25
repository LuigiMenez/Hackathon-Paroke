import { useState } from 'react';
import { Reset } from 'styled-reset';
import GlobalStyle from 'GlobalStyle';
import Karaoké from './components/Karaoké';

export default function App() {
  const [needle, setNeedle] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [video, setVideo] = useState('');

  return (
    <>
      <Reset />
      <GlobalStyle />
      <Karaoké />
      <Home
        needle={needle}
        setNeedle={setNeedle}
        title={title}
        setTitle={setTitle}
        artist={artist}
        setArtist={setArtist}
        video={video}
        setVideo={setVideo}
      />
    </>
  );
}
