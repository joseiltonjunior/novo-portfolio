import { FaReact } from 'react-icons/fa';

import { FloatMenu } from 'components/FloatMenu';
import { Container } from './styles';

interface HeaderProps {
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  toggleTheme,
  toggleLanguage,
}) => {
  return (
    <Container>
      <div className="contentIcon d-flex align-items-center">
        <FaReact size={40} />

        <p>Junior Ferreira</p>
      </div>

      <FloatMenu toggleTheme={toggleTheme} toggleLanguage={toggleLanguage} />
    </Container>
  );
};
