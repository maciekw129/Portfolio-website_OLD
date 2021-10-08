import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../Context/AppContext';
import { mainPageLanguages } from '../../Utilities/languages';
import Hero from '../../Components/Hero/Hero';
import {
    MainPageContainer,
    AboutMeContainer,
    Title,
    Text,
} from './styles';

interface textInterface {
    [key:string]: string,
}

const MainPage: React.FC = () => {

    const { isNavVisible, isEnglish } = useContext(AppContext);
    const [text, setText] = useState<textInterface>({});

    useEffect(() => {
        isEnglish ? setText(mainPageLanguages.english) : setText(mainPageLanguages.polish);
    },[isEnglish]);

    return(
        <MainPageContainer isNavVisible={isNavVisible}>
            <Hero 
                title={text.mainPageTitle}
                text={text.mainPageText}
            />
            <AboutMeContainer isNavVisible={isNavVisible}>
                <Title>About Me<span>.</span></Title>
                <Text>I'm 21 years old student of gastronomy and hospitality from Warsaw (Poland). Because of the gastronomy lockdown due to the covid-19 pandemic, I decided to change my carrier path and try myself in coding.</Text>
            </AboutMeContainer>
        </MainPageContainer>
    )
};

export default MainPage;