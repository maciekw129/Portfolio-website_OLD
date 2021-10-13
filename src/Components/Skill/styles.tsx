import styled from 'styled-components/macro';

export const SkillContainer = styled.div`
    align-self: flex-start;
    display: flex;
    padding: 2rem;
    margin: 1rem 0;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 650px) {
            width: 50%;
            display: flex;
            justify-content: flex-start;
        }
`;

export const Title = styled.h2`
    margin-left: 2rem;
`;