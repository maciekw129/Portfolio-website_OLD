import Page from '../../Components/Page/Page';
import { contactMe } from '../../Utilities/languages';
import contactMeHeroImage from '../../Images/contactMeHeroImage.svg';

const ContactMe: React.FC = () => {
    return(
        <Page page={contactMe} character='!' image={contactMeHeroImage}>

        </Page>
    )
}

export default ContactMe;