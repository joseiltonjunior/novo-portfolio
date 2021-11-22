import { useContext } from 'react';
import { FaReact } from 'react-icons/fa';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div className="contentIcon d-flex align-items-center">
        <FaReact size={40} />

        <p>Junior Ferreira</p>
      </div>

      <Switch
        className="switch-input"
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={shade(0.1, colors.secundary)}
        offColor={shade(0.5, colors.primary)}
      />
    </Container>
  );
};
