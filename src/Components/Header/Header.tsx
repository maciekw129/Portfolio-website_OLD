import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { 
    HeaderContainer,
    Title,
    ButtonsContainer,
    HamburgerContainer,
    Hamburger,
 } from './styles';

const Header = () => {

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isHeaderTop, setIsHeaderTop] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () =>
            setIsHeaderTop(window.pageYOffset === 0)
        );
    })

    const toggleIsNavVisible = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
            <HeaderContainer isHeaderTop={isHeaderTop}>
                <Title>MW</Title>
                <ButtonsContainer>
                    <p>download CV</p>
                    <HamburgerContainer onClick={toggleIsNavVisible} isNavVisible={isNavVisible}>
                        <Hamburger isNavVisible={isNavVisible} />
                    </HamburgerContainer>
                </ButtonsContainer>
                <NavBar isNavVisible={isNavVisible} />
            </HeaderContainer>
    )
};

export default Header;
