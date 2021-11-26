import { useState } from 'react';
import { useTrail, animated as a } from 'react-spring';

import { Container, Background } from './styles';

export const SectionInital: React.FC = () => {
  const items = ['DJ/Produtor', 'Desenvolvedor Front-end', 'Mobile', 'Web'];
  const config = { mass: 5, tension: 2000, friction: 200 };

  const [toggle, setToggle] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 30 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Container
      id="initial"
      onMouseLeave={() => {
        setToggle(false);
      }}
      onMouseEnter={() => {
        setToggle(true);
      }}
    >
      <Background>
        <div className="trails-main">
          <div className="trails-title">
            <p>Junior Ferreira</p>
          </div>

          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
              }}
            >
              <a.p style={{ height }}>{items[index]}</a.p>
            </a.div>
          ))}
        </div>
      </Background>
    </Container>
  );
};
