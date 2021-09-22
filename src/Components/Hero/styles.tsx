import styled from 'styled-components/macro';
import { TextDecoration } from '../TextDecoration/TextDecoration';

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6rem;

    @media only screen and (min-width: 420px) {
        margin-top: 4rem;
    }
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
`;
