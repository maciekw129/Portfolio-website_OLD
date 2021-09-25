import GlobalStyles from './globalStyles';
import { NavProvider } from './Context/NavContext';
import Header from './Components/Header/Header';
import Nav from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <NavProvider>
      <GlobalStyles />
      <Header />
      <Nav />
      <Hero />
      <AboutMe />
      <Footer />
    </NavProvider>
  )
};

export default App;
