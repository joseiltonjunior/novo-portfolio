import { useTranslation } from 'react-i18next';

import { SiTypescript, SiCypress, SiAzuredevops } from 'react-icons/si';

import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaNode,
  FaNpm,
  FaYarn,
  FaGit,
  FaGithub,
  FaWindows,
  FaLinux,
  FaMobile,
} from 'react-icons/fa';

import { Skill } from 'components/SectionSkills/Skill';
import { Container } from './styles';

export const SectionSkills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container id="skills">
      <div className="content-skills">
        <p className="title-skills">{t('skillsTitle')}</p>
        <div className="content-icons">
          <Skill
            icon={FaHtml5}
            url="https://developer.mozilla.org/pt-BR/docs/Web/html"
          />

          <Skill
            icon={FaCss3}
            url="https://developer.mozilla.org/pt-BR/docs/Web/css"
          />

          <Skill
            icon={FaJsSquare}
            url="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
          />

          <Skill icon={SiTypescript} url="https://www.typescriptlang.org/" />

          <Skill icon={FaBootstrap} url="http://getbootstrap.com" />

          <Skill icon={FaReact} url="http://pt-br.reactjs.org" />

          <Skill icon={FaMobile} url="https://reactnative.dev" />

          <Skill icon={FaNode} url="https://nodejs.org/en" />

          <Skill icon={FaNpm} url="https://www.npmjs.com" />

          <Skill icon={FaYarn} url="https://yarnpkg.com/" />

          <Skill icon={FaGit} url="https://git-scm.com" />

          <Skill icon={FaGithub} url="https://github.com" />

          <Skill
            icon={FaWindows}
            url="https://www.microsoft.com/pt-br/windows"
          />

          <Skill icon={FaLinux} url="https://4linux.com.br/o-que-e-linux/" />

          <Skill icon={SiCypress} url="https://www.cypress.io" />

          <Skill
            icon={SiAzuredevops}
            url="https://azure.microsoft.com/pt-br/services/devops"
          />
        </div>
      </div>
    </Container>
  );
};
