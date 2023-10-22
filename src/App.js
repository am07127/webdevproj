import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import FAQs from './Pages/FAQs';
import Contactus from './Pages/ContactUS';
import Adminportal from './Pages/Adminportal';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/faqs" element={<FAQs/>}/>
        <Route exact path="/contactus" element={<Contactus/>}/>
        <Route exact path="/adminportal" element={<Adminportal/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
