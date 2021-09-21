import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { 
    HeaderContainer,
    Title,
    HamburgerContainer,
    Hamburger,
 } from './styles';

const Header = () => {

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleIsNavVisible = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
            <HeaderContainer>
                <Title>MW</Title>
                <HamburgerContainer onClick={toggleIsNavVisible} isNavVisible={isNavVisible}>
                    <Hamburger isNavVisible={isNavVisible} />
                </HamburgerContainer>
                <NavBar isNavVisible={isNavVisible} />
            </HeaderContainer>
    )
};

export default Header;
