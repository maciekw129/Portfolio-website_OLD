import { useState, useEffect, useContext } from 'react';
import { NavContext } from '../../Context/NavContext';
import { 
    HeaderContainer,
    Title,
    ButtonsContainer,
    HamburgerContainer,
    Hamburger,
 } from './styles';

const Header = () => {

    const [isNavVisible, setIsNavVisible] = useContext(NavContext);
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
                    <a>download CV</a>
                    <HamburgerContainer onClick={toggleIsNavVisible} isNavVisible={isNavVisible}>
                        <Hamburger isNavVisible={isNavVisible} />
                    </HamburgerContainer>
                </ButtonsContainer>
            </HeaderContainer>
    )
};

export default Header;
