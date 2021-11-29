import { useTrail, animated as a } from 'react-spring';
import { useState } from 'react';

import { Container } from './styles';

interface imgSeparatorOrder {
  order: number;
  title: string;
}

export const ImgSeparator: React.FC<imgSeparatorOrder> = ({ order, title }) => {
  const config = { mass: 5, tension: 2000, friction: 200 };

  const [toggle, setToggle] = useState(true);
  const trail = useTrail(1, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
  });

  return (
    <Container
      order={order}
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
          <a.p>{title}</a.p>
        </a.div>
      ))}
    </Container>
  );
};
