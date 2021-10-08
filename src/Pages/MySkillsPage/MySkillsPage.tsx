import Hero from '../../Components/Hero/Hero';
import { mySkillsPageLanguages } from '../../Utilities/languages';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../Context/AppContext';
import mySkillsHeroImage from '../../Images/mySkillsHeroImage.svg';
import {
    MySkillsPageContainer,
} from './styles';

interface textInterface {
    [key:string]: string,
}

const MySkillsPage: React.FC = () => {

    const { isEnglish, isNavVisible } = useContext(AppContext);
    const [text, setText] = useState<textInterface>({})

    useEffect(() => {
        isEnglish ? setText(mySkillsPageLanguages.english) : setText(mySkillsPageLanguages.polish);
    }, [isEnglish])

    return(
        <MySkillsPageContainer isNavVisible={isNavVisible}>
            <Hero 
                title={text.mySkillsPageTitle}
                text={text.mySkillsPageText}
                heroPhoto={mySkillsHeroImage}
                character="."
            />
        </MySkillsPageContainer>
    )
}

export default MySkillsPage;