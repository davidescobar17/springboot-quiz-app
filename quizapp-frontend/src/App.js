import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HomePagePromptComponent from './components/HomePagePromptComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
            <Route exact path = "/" component = {HomePagePromptComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
