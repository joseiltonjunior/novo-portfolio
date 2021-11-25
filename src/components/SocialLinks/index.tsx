import React from 'react';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { GrSoundcloud } from 'react-icons/gr';

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

      <a
        href="https://soundcloud.com/junior-ferreira-489979155"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialButton name="soundclound" type="button">
          <GrSoundcloud />
        </SocialButton>
      </a>
    </Container>
  );
};
