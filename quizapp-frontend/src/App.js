import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route exact path = "/" element = {<HomePagePromptComponent />}></Route>
            <Route path = "/questions" element = {<ListQuestionComponent />}></Route>
            <Route path = "/add-question" element = {<AddQuestionComponent />} ></Route>
            <Route path = "/edit-question/:id" element = {<AddQuestionComponent />}></Route>
            <Route path = "/test" element = {<TestComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
