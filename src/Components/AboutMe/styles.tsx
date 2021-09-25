import styled from 'styled-components/macro';

export const AboutMeContainer = styled.article<{ isNavVisible: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #ffffff;//#E6F5FF;
    overflow: hidden;
    max-height: ${({ isNavVisible }) => isNavVisible ? '0px' : '900px'};
    transition: max-height 0.75s ease-in-out;
`;

export const Title = styled.h2`
    font-size: 200%;
    margin-bottom: 1rem;
    padding: 2rem;
    padding-bottom: 0;

    & span {
        color: #BF2B00;
    }
`;

export const Text = styled.p`
    padding: 2rem;
    padding-top: 1rem;
`;

