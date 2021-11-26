import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Img, Tooltip } from './Style';
import parrot from '../../assets/retour.png';

export default function Btn() {
  const [isOwnRisk, setIsOwnRisk] = useState(false);

  function animationHat() {
    setIsOwnRisk(true);
  }

  function animationChuck() {
    setIsOwnRisk(false);
  }

  return (
    <Link to="/">
      <Button
        onMouseEnter={() => animationHat()}
        onMouseLeave={() => animationChuck()}
      >
        <Img src={parrot} alt="parrot" />
      </Button>
      {isOwnRisk && <Tooltip>Karakotoké Karakotoké</Tooltip>}
    </Link>
  );
}
