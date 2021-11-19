import { Container } from './styles';

export const Aside: React.FC = () => {
  return (
    <Container>
      <div className="aboveContent">
        <img
          src="https://avatars.githubusercontent.com/u/47725788?v=4"
          alt="profilePic"
          className="profilePic img-fluid rounded-circle"
        />
      </div>
    </Container>
  );
};
