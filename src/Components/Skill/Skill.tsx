import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    SkillContainer,
    Title,
} from './styles';

interface Props {
    icon: IconDefinition,
    title: string,
}

const Skill: React.FC<Props> = ({ icon, title } : Props) => {
    return(
        <SkillContainer>
            <FontAwesomeIcon icon={icon} size="4x" />
            <Title>{title}</Title>
        </SkillContainer>
    )
}

export default Skill;