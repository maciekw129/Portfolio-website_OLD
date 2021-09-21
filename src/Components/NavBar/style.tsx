import styled from 'styled-components/macro';

interface Props {
    isNavVisible: boolean;
};

export const NavContainer = styled.nav`
    position: absolute;
    right: 0;
    top: 6rem;
    width: 100%;
    overflow: hidden;

    @media only screen and (min-width: 490px) {
        width: 150px;
    };
`;

export const NavList = styled.ul<Props>`
    transform: ${({ isNavVisible }) => isNavVisible ? 'translateX(0%)' : 'TranslateX(100%)'};
    transition: transform 0.5s ease-in-out;
    background-color: hsl(0, 0%, 95%);
`;

export const NavItem = styled.li`
    padding: 2rem 2rem;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;