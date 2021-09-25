import styled from 'styled-components/macro';

export const NavContainer = styled.nav<{ isNavVisible: boolean }>`
    width: 100%;
    overflow: hidden;
    max-height: ${({ isNavVisible }) => isNavVisible ? '500px' : '0px'};
    transition: max-height 0.5s ease-in-out 0.9s;

    @media only screen and (min-width: 490px) {
        width: 150px;
    };
`;

export const NavList = styled.ul`
    background-color: hsl(0, 0%, 95%);
`;

export const NavItem = styled.li`
    position: relative;
    padding: 2rem 2rem;
    text-align: center;
    z-index: 999;

    &:hover {
        cursor: pointer;
    }
`;