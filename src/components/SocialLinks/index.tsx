import React from 'react';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

import { Container, SocialButton } from './styles';

export const SocialLinks: React.FC = () => {
  return (
    <Container>
      <nav />
      <a
        href="https://www.linkedin.com/in/junior-ferreira-318989189"
        target="_blank"
        rel="noreferrer"
      >
        <SocialButton name="linkedln" type="button">
          <FaLinkedinIn />
        </SocialButton>
      </a>

      <a
        href="https://www.instagram.com/dvlp.jr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialButton name="instagram" type="button">
          <FaInstagram />
        </SocialButton>
      </a>

      <a
        href="http://github.com/joseiltonjunior"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialButton name="github" type="button">
          <FaGithub />
        </SocialButton>
      </a>
    </Container>
  );
};
