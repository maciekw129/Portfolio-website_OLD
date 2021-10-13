import Page from '../../Components/Page/Page';
import Skill from '../../Components/Skill/Skill';
import { mySkills } from '../../Utilities/languages';
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
    MySkillsContainer,
} from './styles';


const MySkillsPage: React.FC = () => {

    return(
        <Page page={mySkills} character='.' image={mySkillsHeroImage}>
            <MySkillsContainer>
                <Skill icon={faHtml5} title="HTML (Semantic HTML, JSX)" />
                <Skill icon={faCss3} title="CSS (responsive design, flexbox, grid)" />
                <Skill icon={faSass} title="SASS, SCSS" />
                <Skill icon={faJs} title="JavaScript (ES6, TypeScript)" />
                <Skill icon={faReact} title="React (react hooks, react router, redux, styled components)" />
                <Skill icon={faGithub} title="Git" />
            </MySkillsContainer>
        </Page>
    )
}

export default MySkillsPage;