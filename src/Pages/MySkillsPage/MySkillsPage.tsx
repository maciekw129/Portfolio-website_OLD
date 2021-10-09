import Page from '../../Components/Page/Page';
import Skill from '../../Components/Skill/Skill';
import languages  from '../../Utilities/languages';
import mySkillsHeroImage from '../../Images/mySkillsHeroImage.svg';
import { 
    faHtml5,
    faCss3,
    faJs,
    faReact,
    faGithub,
    faSass,
} from '@fortawesome/free-brands-svg-icons';


const MySkillsPage: React.FC = () => {

    return(
        <Page page={languages.mySkills}>
            <img src={mySkillsHeroImage} />
            <Skill icon={faHtml5} title="HTML (Semantic HTML, JSX)" />
            <Skill icon={faCss3} title="CSS (responsive design, flexbox, grid)" />
            <Skill icon={faSass} title="SASS, SCSS" />
            <Skill icon={faJs} title="JavaScript (ES6, TypeScript)" />
            <Skill icon={faReact} title="React (react hooks, react router, redux, styled components)" />
            <Skill icon={faGithub} title="Git" />
        </Page>
    )
}

export default MySkillsPage;