import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListQuestionComponent from './components/ListQuestionComponent';
import AddQuestionComponent from './components/AddQuestionComponent';
import HomePagePromptComponent from './components/HomePagePromptComponent';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
            <Route exact path = "/" component = {HomePagePromptComponent}></Route>
            <Route path = "/questions" component = {ListQuestionComponent}></Route>
            <Route path = "/add-question" component = {AddQuestionComponent} ></Route>
            <Route path = "/edit-question/:id" component = {AddQuestionComponent}></Route>
            <Route path = "/test" component = {TestComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
