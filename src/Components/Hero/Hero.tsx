import { useContext } from 'react';
import { NavContext } from '../../Context/NavContext'
import heroPhoto from './heroPhoto.jpg';
import {
    HeroContainer,
    TextContainer,
    Title,
} from './styles';

const Hero = () => {

    const [isNavVisible] = useContext(NavContext);

    return(
        <HeroContainer isNavVisible={isNavVisible}>
            <TextContainer>
                <Title>Hello<span>!</span></Title>
                <p>My name is Maciej Walecki. I'm junior Frontend Developer from Poland.</p>
            </TextContainer>
            <img src={heroPhoto} alt="My photo"/>
        </HeroContainer>
    )
};

export default Hero;