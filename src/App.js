import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from "react-router-dom";
import './App.css';
import  Navbar  from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home"

function App() {
  return (
    <>
   <Navbar />

      <Routes>
        <Route path="/" element={ <Home />} />
       <Route path="/home" element={ <Home />} />
      </Routes>
       <Footer />
      </>
  );
}

export default App;
