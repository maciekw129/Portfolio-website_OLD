import styled from 'styled-components/macro';

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 650px) {
            margin-top: 2rem;
            flex-direction: row;
            align-items: flex-start;
        }
`;

export const Title = styled.h1<{ colorRadius: number }>`
    font-size: 250%;
    margin-bottom: 2rem;

    & span {
        color: ${({ colorRadius }) => `hsl(${colorRadius}, 50%, 40%)`};
        transition: color 1s linear;
    }
`;

export const Image = styled.img`
    @media only screen and (min-width: 650px) {
        width: 50%;
    }
`;