import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Project} from './components/Projects';
import Courses from './components/courses';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skills/>
     <Project/>
     <Courses/>
    </div>
  );
}

export default App;
