import { mainPage } from '../../Utilities/languages';
import mainPageHeroImage from '../../Images/mainPageHeroImage.svg';
import { AppContext } from '../../Context/AppContext';
import { useContext } from 'react';
import Page from '../../Components/Page/Page';
import {
    AboutMeContainer,
    Title,
    Text,
} from './styles';

const MainPage: React.FC = () => {

    const { isEnglish } = useContext(AppContext);
    
    return(
        <Page page={mainPage} character='!' image={mainPageHeroImage}>
            <AboutMeContainer>
                <Title>About Me<span>.</span></Title>
                <Text>{isEnglish ? mainPage.english.aboutMe: mainPage.polish.aboutMe}</Text>
            </AboutMeContainer>
        </Page>
    )
};

export default MainPage;