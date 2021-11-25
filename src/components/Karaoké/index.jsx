import { Container, Header, Title, Video, Lyrics } from './style';

const data = {
  title: 'moi',
  artiste: 'moi',
};

export default function Karaoké() {
  return (
    <Container>
      <Header>
        <Title>
          {data.title} - {data.artiste}
        </Title>
      </Header>
      <Video>
        <Lyrics>BLABLABLABLABLABLA</Lyrics>
      </Video>
    </Container>
  );
}
