import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from "react-router-dom";
import './App.css';
import  Navbar  from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home"
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
   <Navbar />

      <Routes>
        <Route path="/" element={ <Home />} />
       <Route path="/home" element={ <Home />} />
          <Route path="/about" element={ <AboutUs />} />
        <Route path="/contact" element={ <ContactUs />} />
      </Routes>
       <Footer />
      </>
  );
}

export default App;
