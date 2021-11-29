import { useTranslation } from 'react-i18next';
import { Container } from './styles';

const SectionAbout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container id="about">
      <div className="content-about">
        <p className="title-about">{t('aboutTitle')}</p>
        <p className="text-description">{t('aboutTextPrimary')}</p>
        <p className="text-description">{t('aboutTextSecondary')}</p>
      </div>
    </Container>
  );
};

export default SectionAbout;
