import { Container } from './styles';

const SectionAbout: React.FC = () => {
  return (
    <Container id="about">
      <div className="content-about">
        <p className="title-about">Sobre</p>
        <p className="text-description">
          Desenvolvedor Jr. IV, com 2 anos de experiência com projetos Front-end
          (Mobile e Web), desenvolvidos em React, React Native, JavaScript,
          TypeScript e seus respectivos ecossistemas.
        </p>
        <p className="text-description">
          Em busca de novos desafios para evoluir como pessoa, melhorar minhas
          Skills e conhecer novas Tecnologias, afim de me tornar um Especialista
          (Front-end, Mobile e Web).
        </p>
      </div>
    </Container>
  );
};

export default SectionAbout;
