import Hero from '../../Components/Hero/Hero';
import Skill from '../../Components/Skill/Skill';
import { mySkillsPageLanguages } from '../../Utilities/languages';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../Context/AppContext';
import mySkillsHeroImage from '../../Images/mySkillsHeroImage.svg';
import { 
    faHtml5,
    faCss3,
    faJs,
    faReact,
    faGit,
} from '@fortawesome/free-brands-svg-icons';
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
            <Skill icon={faHtml5} title="HTML" />
            <Skill icon={faCss3} title="CSS" />
            <Skill icon={faJs} title="JavaScript" />
            <Skill icon={faReact} title="React" />
            <Skill icon={faGit} title="Git" />
        </MySkillsPageContainer>
    )
}

export default MySkillsPage;