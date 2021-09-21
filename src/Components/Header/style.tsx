import styled from "styled-components/macro";

interface Props {
    isNavVisible: boolean;
};

export const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    background-color: #027353;
    box-shadow: 0 0.1rem 10px #808080;
`;

export const Title = styled.h1`
    font-family: 'Josefin sans', sans-serif;
    line-height: 2.5rem;
    padding: 0 1.5rem;
    text-align: center;
`;

export const HamburgerContainer = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ isNavVisible }) => isNavVisible ? '#ffffff' : '#027353'};
    width: 150px;
    height: 100%;
    border-left: 1px solid black;
    transition: background-color 0.2s linear;
    cursor: pointer;

    @media(hover: hover) and (pointer: fine) {
        &:hover {
        background-color: hsl(0, 0%, 100%);
        transition: background-color 0.2s linear;

            & div, div::before, div::after {
                border-color: #027353;
            }
        }
    };
`;

export const Hamburger = styled.div<Props>`
    width: 25px;
    height: 25px;
    background: none;
    border: 0;
    position: relative;
    border-top: 3px solid;
    border-color: ${({ isNavVisible }) => isNavVisible ? '#027353' : '#ffffff'};
    border-width: ${({ isNavVisible }) => isNavVisible ? '0px' : '3px'};
    transition: border-width 0.2s linear;
    &::before, ::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        border-top: 3px solid;
        border-color: ${({ isNavVisible }) => isNavVisible ? '#027353' : '#ffffff'};
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