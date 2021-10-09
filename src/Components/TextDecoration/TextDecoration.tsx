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
        animation: slideIn 3s ease-in-out 1s forwards;
    }

    &::after {
        content: '';
        animation: slideIn 3s ease-in-out 1s;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        position: absolute;
        animation: slideIn 3s ease-in-out 1s forwards;
        bottom: 0;
        right: 0;
    }

    @keyframes slideIn {
        0% {
            opacity: 0%;
            width: 0%;
            height: 0%;
        }
        50% {
            opacity: 100%;
            width: 60%;
            height: 60%;
        }
        100% {
            width: 50%;
            height: 50%;
        }
    }
`;   