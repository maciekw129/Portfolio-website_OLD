import {
    NavContainer,
    NavList,
    NavItem,
} from './styles';

interface NavBarProps {
    isNavVisible: boolean;
}

const NavBar = ({ isNavVisible }: NavBarProps) => {
    return(
        <NavContainer>
            <NavList isNavVisible={isNavVisible}>
                <NavItem>About Me</NavItem>
                <NavItem>My skills</NavItem>
                <NavItem>My projects</NavItem>
                <NavItem>Contact Me</NavItem>
            </NavList>
        </NavContainer>
    )
};

export default NavBar;