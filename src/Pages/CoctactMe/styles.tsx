import styled from 'styled-components/macro';

export const EmailForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

export const EmailInput = styled.input`
    width: 75%;
    height: 1.5rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 0;
    background-color: hsl(0, 0%, 95%);
    border-radius: 5px;
    text-align: center;

    @media only screen and (min-width: 650px) {
        width: 20%;
    }
`;

export const EmailText = styled.textarea`
    height: 5rem;
    padding: 0.5rem;
    width: 75%;
    margin-bottom: 1rem;
    border: 0;
    background-color: hsl(0, 0%, 95%);
    border-radius: 5px;

    @media only screen and (min-width: 650px) {
        width: 25%;
    }
`;

export const SendButton = styled.button`
    background-color: transparent;
    border: 1px solid #027353;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
`;
    
