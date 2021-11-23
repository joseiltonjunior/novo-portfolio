import React from 'react';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

import { Container, SocialButton } from './styles';

export const SocialLinks: React.FC = () => {
  return (
    <Container>
      <SocialButton
        name="linkedln"
        type="button"
        formTarget="_blank"
        onClick={() => {
          window.location.href =
            'https://www.linkedin.com/in/junior-ferreira-318989189';
        }}
      >
        <FaLinkedinIn />
      </SocialButton>
      <SocialButton
        name="instagram"
        type="button"
        formTarget="_blank"
        onClick={() => {
          window.location.href = 'https://www.instagram.com/dvlp.jr';
        }}
      >
        <FaInstagram />
      </SocialButton>
      <SocialButton
        name="github"
        type="button"
        formTarget="_blank"
        onClick={() => {
          window.location.href = 'https://github.com/joseiltonjunior';
        }}
      >
        <FaGithub />
      </SocialButton>
    </Container>
  );
};
