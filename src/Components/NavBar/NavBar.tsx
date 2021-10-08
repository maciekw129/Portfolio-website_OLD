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
                <Link to='/'><NavItem onClick={handleClick}>About Me</NavItem></Link>
                <Link to='/my-skills'><NavItem onClick={handleClick}>My skills</NavItem></Link>
                <Link to='/my-projects'><NavItem onClick={handleClick}>My projects</NavItem></Link>
                <Link to='/contact-me'><NavItem onClick={handleClick}>Contact Me</NavItem></Link>
            </NavList>
        </NavContainer>
    )
};

export default NavBar;