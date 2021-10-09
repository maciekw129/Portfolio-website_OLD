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
    faGithub,
    faSass,
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
                character="."
            />
            <img src={mySkillsHeroImage} />
            <Skill icon={faHtml5} title="HTML (Semantic HTML, JSX)" />
            <Skill icon={faCss3} title="CSS (responsive design, flexbox, grid)" />
            <Skill icon={faSass} title="SASS, SCSS" />
            <Skill icon={faJs} title="JavaScript (ES6, TypeScript)" />
            <Skill icon={faReact} title="React (react hooks, react router, redux, styled components)" />
            <Skill icon={faGithub} title="Git" />
        </MySkillsPageContainer>
    )
}

export default MySkillsPage;