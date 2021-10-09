import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebook, 
    faLinkedin, 
    faGithub, 
} from '@fortawesome/free-brands-svg-icons';
import {
    FooterContainer,
    IconsContainer,
} from './styles';

const Footer: React.FC = () => {
    return(
        <FooterContainer>
            <IconsContainer>
                <a href="https://www.facebook.com/maciek.walecki.7/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
                </a>
                <a href="https://www.linkedin.com/in/maciej-walecki-51b76a1b7/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
                </a>
                <a href="https://github.com/maciekw129?tab=repositories" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
                </a>
            </IconsContainer>
            <h5>&copy;2021 Copyright - All rights Reserved</h5>
        </FooterContainer>
    )
};

export default Footer;