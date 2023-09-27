
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar.jsx";
import { Contact } from './components/Contact';
import { Worshipwithus } from './components/Worshipwithus';
import { About } from './components/About';
import {Worship} from './components/Worship';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <About/>
      <Worshipwithus/>
      <Worship/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;