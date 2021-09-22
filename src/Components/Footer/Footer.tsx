import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    FooterContainer,
    IconsContainer,
} from './styles';

const Footer = () => {
    return(
        <FooterContainer>
            <IconsContainer>
                <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
            </IconsContainer>
            <h5>2021 Copyright - All rights Reserved</h5>
        </FooterContainer>
    )
};

export default Footer;