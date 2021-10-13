import { useEffect, useState } from 'react'; 
import { TextDecoration } from '../TextDecoration/TextDecoration';
import {
    HeroContainer,
    Title,
    Image,
} from './styles';

interface Props {
    title: string,
    text: string,
    character: string,
    image: string,
};

const Hero: React.FC<Props> = ({title, text, character, image} : Props) => {

    const [colorRadius, setColorRadius] = useState(163);

    useEffect(() => {
        const timeout = setTimeout(() => {
            colorRadius >= 360 ? setColorRadius(colorRadius - 360) : setColorRadius(colorRadius + 90);
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
            <Image src={image} />
        </HeroContainer>
    )
};

export default Hero;