import Hero from '../../Components/Hero/Hero';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../Context/AppContext';
import {
    PageContainer,
} from './styles';

interface textInterface {
    [key:string]: string,
}

type Props = {
    page: {
        english: {
            [key:string]: string
        },
         polish: {
            [key:string]: string,
        },
    },
    children?: React.ReactNode,
    character: string,
    image: string,
}

const Page: React.FC<Props> = ({children, page, character, image}: Props) => {

    const { isEnglish, isNavVisible } = useContext(AppContext);
    const [text, setText] = useState<textInterface>({});

    useEffect(() => {
        isEnglish ? setText(page.english) : setText(page.polish);
    }, [isEnglish])

    return(
        <PageContainer isNavVisible={isNavVisible}>
            <Hero
                title={text.title}
                text={text.text}
                character={character}
            />
            <img src={image} alt='hero image' />
            {children}
        </PageContainer>
    )
};

export default Page;