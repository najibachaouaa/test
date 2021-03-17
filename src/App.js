
import './App.css'

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
