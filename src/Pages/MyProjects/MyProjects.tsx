import Page from '../../Components/Page/Page';
import { myProjects } from '../../Utilities/languages';
import myProjectsHeroImage from '../../Images/myProjectsHeroImage.svg';
import Project from '../../Components/Project/Project';
import cocktailProjectImage from '../../Images/cocktailProjectImage.jpg';
import rockPaperScissorsProjectImage from '../../Images/rockPaperScissorsProjectImage.jpg'

const MyProjects = () => {
    return(
        <Page page={myProjects} character='.' image={myProjectsHeroImage}>
            <Project 
                image={cocktailProjectImage}
                title="Cocktails App"
                text="App where You can search for a specific cocktail, and check its recipe."
                liveHref="https://cocktails-app-maciekw129.netlify.app/"
                codeHref="https://github.com/maciekw129/cocktails"
            />
            <Project 
                image={rockPaperScissorsProjectImage}
                title="Rock Paper Scissors game"
                text="This app is the copy od classic rock, paper and scissors game."
                liveHref="https://paper-rock-scissors-maciekw129.netlify.app/"
                codeHref="https://github.com/maciekw129/rock_paper_scissors"
            />
        </Page>
    )
}

export default MyProjects;