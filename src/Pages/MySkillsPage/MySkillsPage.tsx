import Hero from '../../Components/Hero/Hero';
import { mySkillsPageLanguages } from '../../Utilities/languages';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../Context/AppContext';
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
    })

    return(
        <MySkillsPageContainer isNavVisible={isNavVisible}>
            <Hero 
                title={text.mySkillsPageTitle}
                text={text.mySkillsPageText}
            />
        </MySkillsPageContainer>
    )
}

export default MySkillsPage;