import logo from './logo.svg';

import Header from './components/Header';
import Menu from './components/Menu';
import Section from './components/section';
import Configuration from './components/Configuration';
import Realisation from './components/Realisation';
import './app.css'
import Notice from './components/Notice';
import Magasin from './components/Magasin';
import Acceuil from './pages/Acceuil';
import Boutique from './pages/Boutique';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   <div className="app">
   <Router>
     
        <Switch>
          <Route  exact path="/">
            <Acceuil />
          </Route>
          <Route exact path="/boutique">
            <Boutique />
          </Route>
        
        </Switch>
   
    </Router>
   </div>
  );
}

export default App;
