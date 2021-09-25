import { useContext } from 'react';
import { NavContext } from '../../Context/NavContext';
import {
    NavContainer,
    NavList,
    NavItem,
} from './styles';



const NavBar = () => {

    const [isNavVisible] = useContext(NavContext);

    return(
        <NavContainer isNavVisible={isNavVisible}>
            <NavList>
                <NavItem>About Me</NavItem>
                <NavItem>My skills</NavItem>
                <NavItem>My projects</NavItem>
                <NavItem>Contact Me</NavItem>
            </NavList>
        </NavContainer>
    )
};

export default NavBar;