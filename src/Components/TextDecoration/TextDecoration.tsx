import styled from 'styled-components/macro';

export const TextDecoration = styled.div`
    padding: 2rem;
    margin: 1rem;
    width: 90%;
    z-index: -1;
    margin-top: 3rem;
    margin-bottom: 3rem;
    position: relative;

    &::before {
        content: '';
        border-top: 1px solid black;
        border-left: 1px solid black;
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 50%;
    }

    &::after {
        content: '';
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 50%;
        height: 50%;
    }
`;   