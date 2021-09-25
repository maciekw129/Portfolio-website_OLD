import { useContext } from 'react';
import { NavContext } from '../../Context/NavContext';
import {
    AboutMeContainer,
    Title,
    Text,
} from './styles';


const AboutMe = () => {

    const [isNavVisible] = useContext(NavContext);

    return(
        <AboutMeContainer isNavVisible={isNavVisible}>
            <Title>About Me<span>.</span></Title>
            <Text>I'm 21 years old student of gastronomy and hospitality from Warsaw (Poland). Because of the gastronomy lockdown due to the covid-19 pandemic, I decided to change my carrier path and try myself in coding.</Text>
        </AboutMeContainer>
    )
};

export default AboutMe;