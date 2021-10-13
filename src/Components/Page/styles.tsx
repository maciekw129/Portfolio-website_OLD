import styled from 'styled-components/macro';

export const PageContainer = styled.section<{ isNavVisible: boolean}>`
    max-height: ${({ isNavVisible }) => isNavVisible ? '0px' : '1700px'};
    transition: ${({ isNavVisible }) => isNavVisible ? 'max-height 0.75s ease-in-out' : 'max-height 0.75s ease-in-out 0.9s'};
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

