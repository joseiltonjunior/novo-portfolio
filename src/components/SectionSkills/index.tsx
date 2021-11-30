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

import { Container } from './styles';

export const SectionSkills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container id="skills">
      <div className="content-skills">
        <p className="title-skills">{t('skillsTitle')}</p>
        <div className="content-icons">
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHtml5 />
          </a>

          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/css"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCss3 />
          </a>

          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaJsSquare />
          </a>

          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTypescript />
          </a>

          <a
            href="http://getbootstrap.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBootstrap />
          </a>

          <a
            href="http://pt-br.reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact />
          </a>

          <a
            href="https://reactnative.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMobile />
          </a>

          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaNode />
          </a>

          <a
            href="https://www.npmjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaNpm />
          </a>

          <a
            href="https://yarnpkg.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYarn />
          </a>

          <a
            href="https://git-scm.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGit />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.microsoft.com/pt-br/windows"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWindows />
          </a>

          <a
            href="https://linuxmint.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinux />
          </a>

          <a
            href="https://www.cypress.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCypress />
          </a>

          <a
            href="https://azure.microsoft.com/pt-br/services/devops"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiAzuredevops />
          </a>
        </div>
      </div>
    </Container>
  );
};
