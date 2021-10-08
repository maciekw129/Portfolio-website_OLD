import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import {
    NavContainer,
    NavList,
    NavItem,
} from './styles';



const NavBar: React.FC = () => {

    const { isNavVisible, setIsNavVisible } = useContext(AppContext);

    const handleClick = () => {
        setTimeout(() => {
            setIsNavVisible(!isNavVisible);
        }, 0)
    };

    return(
        <NavContainer isNavVisible={isNavVisible}>
            <NavList>
                <NavItem onClick={handleClick}><Link to='/'>About Me</Link></NavItem>
                <NavItem onClick={handleClick}><Link to='/my-skills'>My skills</Link></NavItem>
                <NavItem onClick={handleClick}><Link to='/my-projects'>My projects</Link></NavItem>
                <NavItem onClick={handleClick}><Link to='/contact-me'>Contact Me</Link></NavItem>
            </NavList>
        </NavContainer>
    )
};

export default NavBar;