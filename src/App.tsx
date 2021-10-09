import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProvider } from './Context/AppContext';
import languages from './Utilities/languages';
import Header from './Components/Header/Header';
import Nav from './Components/NavBar/NavBar';
import MainPage from './Pages/MainPage/MainPage';
import Footer from './Components/Footer/Footer';
import MySkillsPage from './Pages/MySkillsPage/MySkillsPage';
import MyProjects from './Pages/MyProjects/MyProjects';

const App = () => {
  return (
    <AppProvider>
      <Router>
          <GlobalStyles />
          <Header />
          <Nav />
          <Switch>
            <Route path='/' exact>
              <MainPage />
            </Route>
            <Route path='/my-skills' exact>
              <MySkillsPage />
            </Route>
            <Route path='/my-projects' exact>
              <MyProjects />
            </Route>
          </Switch>
          <Footer />
      </Router>
    </AppProvider>
  )
};

export default App;
