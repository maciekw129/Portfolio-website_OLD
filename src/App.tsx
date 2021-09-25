import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavProvider } from './Context/NavContext';
import Header from './Components/Header/Header';
import Nav from './Components/NavBar/NavBar';
import MainPage from './Components/MainPage/MainPage';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <NavProvider>
        <GlobalStyles />
        <Header />
        <Nav />
        <Switch>
          <Route path='/' exact>
            <MainPage />
          </Route>
        </Switch>
        <Footer />
      </NavProvider>
    </Router>
  )
};

export default App;
