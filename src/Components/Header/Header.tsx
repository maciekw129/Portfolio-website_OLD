import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { 
    HeaderContainer,
    Title,
    ButtonsContainer,
    HamburgerContainer,
    Hamburger,
 } from './styles';

const Header: React.FC = () => {

    const { isNavVisible, setIsNavVisible, isEnglish, setIsEnglish } = useContext(AppContext);
    const [isHeaderTop, setIsHeaderTop] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () =>
            setIsHeaderTop(window.pageYOffset === 0)
        );
    });

    return (
            <HeaderContainer isHeaderTop={isHeaderTop}>
                <Title>MW</Title>
                <ButtonsContainer>
                    <p onClick={() => setIsEnglish(!isEnglish)}>{isEnglish ? 'Polish' : 'English'}</p>
                    <HamburgerContainer onClick={() => setIsNavVisible(!isNavVisible)} isNavVisible={isNavVisible}>
                        <Hamburger isNavVisible={isNavVisible} />
                    </HamburgerContainer>
                </ButtonsContainer>
            </HeaderContainer>
    )
};

export default Header;
