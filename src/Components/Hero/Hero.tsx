import { useEffect, useState } from 'react'; 
import { TextDecoration } from '../TextDecoration/TextDecoration';
import {
    HeroContainer,
    Title,
} from './styles';

interface Props {
    title: string,
    text: string,
    character: string,
    heroPhoto: any,
};

const Hero: React.FC<Props> = ({title, text, heroPhoto, character} : Props) => {

    const [colorRadius, setColorRadius] = useState(163);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setColorRadius(colorRadius + 90);
        }, 1000)
        return () => {
            clearTimeout(timeout)
        }
    }, [colorRadius])

    return(
        <HeroContainer>
            <TextDecoration>
                <Title colorRadius={colorRadius}>{title}<span>{character}</span></Title>
                <p>{text}</p>
            </TextDecoration>
            <img src={heroPhoto} alt="Me"/>
        </HeroContainer>
    )
};

export default Hero;