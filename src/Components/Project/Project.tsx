import {
    ProjectContainer,
    Title,
    Text,
    TextContainer,
    Links,
} from './styles';

type Props = {
    image: string,
    codeHref: string,
    liveHref: string,
    title: string,
    text: string,
}

const Project:React.FC<Props> = ({ image, codeHref, liveHref, title, text }: Props) => {
    return(
        <ProjectContainer>
            <TextContainer>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Links>
                    <a href={liveHref} target="_blank" rel="noreferrer">Live App</a>
                    <a href={codeHref} target="_blank" rel="noreferrer">Code</a>
                </Links>
            </TextContainer>
            <img src={image} alt='project image' />
        </ProjectContainer>
    )
};

export default Project;