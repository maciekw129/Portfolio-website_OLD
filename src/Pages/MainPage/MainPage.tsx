import languages  from '../../Utilities/languages';
import mainPageHeroImage from '../../Images/mainPageHeroImage.svg';
import Page from '../../Components/Page/Page';
import {
    AboutMeContainer,
    Title,
    Text,
} from './styles';

const MainPage: React.FC = () => {

    

    return(
        <Page page={languages.mainPage}>
            <img src={mainPageHeroImage} />
            <AboutMeContainer>
                <Title>About Me<span>.</span></Title>
                <Text>I'm 21 years old student of gastronomy and hospitality from Warsaw (Poland). Because of the gastronomy lockdown due to the covid-19 pandemic, I decided to change my carrier path and try myself in coding.</Text>
            </AboutMeContainer>
        </Page>
    )
};

export default MainPage;