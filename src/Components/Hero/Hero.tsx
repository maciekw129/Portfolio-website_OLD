import heroPhoto from './heroPhoto.jpg';
import {
    AboutMeContainer,
    TextContainer,
    Title,
} from './styles';

const Hero = () => {
    return(
        <AboutMeContainer>
            <TextContainer>
                <Title>Hello!</Title>
                <p>My name is Maciej Walecki. I'm junior Frontend Developer from Poland.</p>
            </TextContainer>
            <img src={heroPhoto} alt="My photo"/>
        </AboutMeContainer>
    )
};

export default Hero;