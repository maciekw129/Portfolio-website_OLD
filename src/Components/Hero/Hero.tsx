import heroPhoto from './heroPhoto.jpg';
import {
    HeroContainer,
    TextContainer,
    Title,
} from './styles';

const Hero = () => {
    return(
        <HeroContainer>
            <TextContainer>
                <Title>Hello<span>!</span></Title>
                <p>My name is Maciej Walecki. I'm junior Frontend Developer from Poland.</p>
            </TextContainer>
            <img src={heroPhoto} alt="My photo"/>
        </HeroContainer>
    )
};

export default Hero;