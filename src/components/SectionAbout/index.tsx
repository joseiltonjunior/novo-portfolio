import { Container } from './styles';

const SectionAbout: React.FC = () => {
  return (
    <Container>
      <div className="content-about">
        <p className="title-about">Sobre</p>
        <p className="text-description">
          Desenvolvedor Jr. IV, com 2 anos de experiência com projetos Front-end
          (Mobile e Web), desenvolvidos em React, React Native, JavaScript,
          TypeScript e seus respectivos ecossistima.
        </p>
        <p className="text-description">
          Em busca desafios para evoluir como pessoa, melhorar minhas Skills e
          conhecer novas Tecnologias, afins de me tornar um Especialista
          Front-end (Mobile e Web).
        </p>
      </div>
    </Container>
  );
};

export default SectionAbout;
