import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Header from './Components/Header/Header';


const App = () => {
  return (
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>

        </Switch>
      </Router>
  )
};

export default App;
