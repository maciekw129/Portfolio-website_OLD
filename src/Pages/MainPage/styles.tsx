import styled from 'styled-components/macro';

export const AboutMeContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #ffffff;
`;

export const Title = styled.h2`
    font-size: 200%;
    margin-bottom: 1rem;
    padding: 2rem;
    padding-bottom: 0;

    & span {
        color: #027353;
    }
`;

export const Text = styled.p`
    padding: 2rem;
    padding-top: 1rem;
`;

