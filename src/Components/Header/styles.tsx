import styled from "styled-components/macro";

interface Props {
    isNavVisible: boolean;
};

export const HeaderContainer = styled.header`
    position: fixed;
    display: flex;
    top: 0;
    justify-content: space-between;
    align-items: baseline;
    height: 4rem;
    width: 100%;
    background-color: hsl(0, 0%, 97%);
    box-shadow: 0 0.01rem 5px #808080;
`;

export const Title = styled.h1`
    font-family: 'Josefin sans', sans-serif;
    color: #027353;
    line-height: 2.5rem;
    letter-spacing: -0.1rem;
    padding: 0 1.5rem;
    
`;

export const HamburgerContainer = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ isNavVisible }) => isNavVisible ? '#027353' : 'hsl(0, 0%, 97%)'};
    width: 150px;
    height: 100%;
    transition: background-color 0.2s linear;
    cursor: pointer;

    @media(hover: hover) and (pointer: fine) {
        &:hover {
        background-color: #027353;
        transition: background-color 0.2s linear;

            & div, div::before, div::after {
                border-color: #ffffff;
            }
        }
    };

    @media only screen and (max-width: 490px) {
        width: 70px;
    }
`;

export const Hamburger = styled.div<Props>`
    width: 25px;
    height: 25px;
    background: none;
    border: 0;
    position: relative;
    border-top: 3px solid;
    border-color: ${({ isNavVisible }) => isNavVisible ? '#ffffff' : '#027353'};
    border-width: ${({ isNavVisible }) => isNavVisible ? '0px' : '3px'};
    transition: border-width 0.2s linear;
    &::before, ::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        border-top: 3px solid;
        border-color: ${({ isNavVisible }) => isNavVisible ? '#ffffff' : '#027353'};
    } 
    &::before {
        top: 8px;
        transform: ${({ isNavVisible }) => isNavVisible ? 'translateY(3px) rotate(45deg)' : 'none'};
        transition: transform 0.2s linear;
    }
    &::after {
        top: 19px;
        transform: ${({ isNavVisible }) => isNavVisible ? 'translateY(-8px) rotate(-45deg)' : 'none'};
        transition: transform 0.2s linear;
    }
`;