import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import  { BrowserRouter as Router} from 'react-router-dom';
import Slider from "./components/Slider.js" ;
import  data from "./data/data.json" ;
import Offers from "./components/Offers.js"
function App() {
  return (
    <Router>
      <PreNavbar /> 
      <Navbar />
      <Slider start={data.banner.start} /> 
      <Offers offer={data.offer} />
    </Router>

  )
};

export default App;
