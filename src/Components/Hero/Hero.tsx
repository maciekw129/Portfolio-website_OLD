import heroPhoto from './heroPhoto.jpg';
import { TextDecoration } from '../TextDecoration/TextDecoration';
import {
    HeroContainer,
    Title,
} from './styles';

interface Props {
    title: string,
    text: string,
};

const Hero: React.FC<Props> = ({title, text} : Props) => {

    return(
        <HeroContainer>
            <TextDecoration>
                <Title>{title}</Title>
                <p>{text}</p>
            </TextDecoration>
            <img src={heroPhoto} alt="Me"/>
        </HeroContainer>
    )
};

export default Hero;