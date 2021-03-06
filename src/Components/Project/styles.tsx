import styled from 'styled-components/macro';

export const ProjectContainer = styled.div`
    margin: 2rem 0;
    padding: 1rem;

    @media only screen and (min-width: 650px) {
        width: 50%;
    }
`;

export const TextContainer = styled.div`
    margin-bottom: 0.5rem;
`;

export const Title = styled.h3`

`;

export const Text = styled.p`

`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.5rem;

    & a {
        text-decoration: underline;
        cursor: pointer;
    }
`