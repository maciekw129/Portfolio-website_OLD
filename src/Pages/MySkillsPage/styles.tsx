import styled from 'styled-components/macro';

export const MySkillsPageContainer = styled.section<{ isNavVisible: boolean }>`
    max-height: ${({ isNavVisible }) => isNavVisible ? '0px' : '910px'};
    transition: ${({ isNavVisible }) => isNavVisible ? 'max-height 0.75s ease-in-out' : 'max-height 0.75s ease-in-out 0.9s'};
    overflow: hidden;
`;

export const Title = styled.h1`
    font-size: 250%;
    margin-bottom: 2rem;

    & span {
        color: #BF2B00;
    }
`;