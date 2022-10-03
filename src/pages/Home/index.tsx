import { IoMdArrowRoundForward } from 'react-icons/io';

// Custom hook for home page
import { useHome } from './useHome';
import { HomePage, Introduction, Image, Tour, Container } from './styles';

const Home = () => {
  const { loaded, img, mapMessages, showImage, showButton } = useHome(
    'https://i.imgur.com/bM4humM.jpg?3'
  );

  return (
    <HomePage>
      <Introduction>{mapMessages()}</Introduction>
      <Container>
        {showImage && loaded && <Image src={img} alt="Amaury Vasquez" />}

        {showButton && loaded && (
          <Tour to="/projects">
            Start tour <IoMdArrowRoundForward />
          </Tour>
        )}
      </Container>
    </HomePage>
  );
};

export default Home;
