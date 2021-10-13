import Page from '../../Components/Page/Page';
import { contactMe } from '../../Utilities/languages';
import contactMeHeroImage from '../../Images/contactMeHeroImage.svg';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
    EmailForm,
    EmailInput,
    EmailText,
    SendButton,
} from './styles';

const ContactMe: React.FC = () => {

    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_maciekw129', 'template_maciekw129', e.target, 'user_tjWm8B2iouokJPErZM8FG')
        .then(response => {
            console.log(response);
            setEmail('');
            setMessage(''); 
        })
    }

    return(
        <Page page={contactMe} character='!' image={contactMeHeroImage}>
                <EmailForm onSubmit={sendEmail}>
                    <label htmlFor="email">Your e-mail</label>
                    <EmailInput 
                        required
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label htmlFor="message">Message</label>
                    <EmailText
                        required
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <SendButton type="submit">Send</SendButton>
                 </EmailForm>
        </Page>
    )
}

export default ContactMe;