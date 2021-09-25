import styled from 'styled-components/macro';
import { TextDecoration } from '../TextDecoration/TextDecoration';

export const HeroContainer = styled.div<{ isNavVisible: boolean }>`
    display: flex;
    flex-direction: column;
    max-height: ${({ isNavVisible }) => isNavVisible ? '0px' : '670px'};
    transition: ${({ isNavVisible }) => isNavVisible ? 'max-height 0.75s ease-in-out' : 'max-height 0.75s ease-in-out 0.9s'};

    @media only screen and (min-width: 420px) {
        margin-top: 4rem;
    }
    overflow: hidden;
`;

export const TextContainer = styled(TextDecoration)`
    width: 90%;
    z-index: -1;
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

export const Title = styled.h1`
    font-size: 250%;
    margin-bottom: 2rem;

    & span {
        color: #BF2B00;
    }
`;
