import styled from 'styled-components/macro';

export const NavContainer = styled.nav<{ isNavVisible: boolean }>`
    width: 100%;
    overflow: hidden;
    max-height: ${({ isNavVisible }) => isNavVisible ? '350px' : '0px'};
    transition: ${({ isNavVisible }) => isNavVisible ? 'max-height 0.75s ease-in-out 0.9s' : 'max-height 0.75s ease-in-out'};
`;

export const NavList = styled.ul`
    background-color: hsl(0, 0%, 95%);
`;

export const NavItem = styled.li`
    padding: 2rem 2rem;
    text-align: center;
    z-index: 999;

    &:hover {
        cursor: pointer;
    }
`;