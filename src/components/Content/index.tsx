import SectionAbout from 'components/SectionAbout';
import { SectionExperience } from 'components/SectionExperience';
import { SectionInital } from 'components/SectionInital';
import { useState } from 'react';
import { useTrail, animated as a } from 'react-spring';

import { Container, Background } from './styles';

export const Content: React.FC = () => {
  const config = { mass: 5, tension: 2000, friction: 200 };

  const [toggle, setToggle] = useState(true);
  const trail = useTrail(1, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
  });

  return (
    <Container>
      <SectionInital />
      <SectionAbout />
      <Background
        onMouseLeave={() => {
          setToggle(false);
        }}
        onMouseEnter={() => {
          setToggle(true);
        }}
      >
        {trail.map(({ x, ...rest }, index) => (
          <a.div
            key={index}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.p>FIRST MOBILE</a.p>
          </a.div>
        ))}
      </Background>
      <SectionExperience />
      <Background
        onMouseLeave={() => {
          setToggle(false);
        }}
        onMouseEnter={() => {
          setToggle(true);
        }}
      >
        {trail.map(({ x, ...rest }, index) => (
          <a.div
            key={index}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.p>RESPONSIVE</a.p>
          </a.div>
        ))}
      </Background>
    </Container>
  );
};
