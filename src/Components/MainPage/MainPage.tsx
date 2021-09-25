import { useContext } from 'react';
import { NavContext } from '../../Context/NavContext';
import Hero from '../Hero/Hero';
import {
    MainPageContainer,
    AboutMeContainer,
    Title,
    Text,
} from './styles';


const MainPage = () => {

    const [isNavVisible] = useContext(NavContext);

    return(
        <MainPageContainer isNavVisible={isNavVisible}>
            <Hero />
            <AboutMeContainer isNavVisible={isNavVisible}>
                <Title>About Me<span>.</span></Title>
                <Text>I'm 21 years old student of gastronomy and hospitality from Warsaw (Poland). Because of the gastronomy lockdown due to the covid-19 pandemic, I decided to change my carrier path and try myself in coding.</Text>
            </AboutMeContainer>
        </MainPageContainer>
    )
};

export default MainPage;