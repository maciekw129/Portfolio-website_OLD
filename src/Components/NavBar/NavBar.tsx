import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NavContext } from '../../Context/NavContext';
import {
    NavContainer,
    NavList,
    NavItem,
} from './styles';



const NavBar = () => {

    const [isNavVisible, setIsNavVisible] = useContext(NavContext);

    return(
        <NavContainer isNavVisible={isNavVisible}>
            <NavList>
                <NavItem onClick={() => setIsNavVisible(!isNavVisible)}><Link to='/'>About Me</Link></NavItem>
                <NavItem onClick={() => setIsNavVisible(!isNavVisible)}><Link to='/my-skills'>My skills</Link></NavItem>
                <NavItem onClick={() => setIsNavVisible(!isNavVisible)}><Link to='/my-projects'>My projects</Link></NavItem>
                <NavItem onClick={() => setIsNavVisible(!isNavVisible)}><Link to='/contact-me'>Contact Me</Link></NavItem>
            </NavList>
        </NavContainer>
    )
};

export default NavBar;