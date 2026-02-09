import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import AppButtons from './components/AppButtons';
import Footer from './components/Footer';

import Home from "./pages/Home";
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Industry from './pages/Industry';

// Products pages
import PPFabricPage from './pages/Products/PPFabricPage';
import PPBagsPage from './pages/Products/PPBags';
import MonolayerFilmsPage from './pages/Products/MonolayerFilm';
import MultifilamentYarnPage from './pages/Products/MultifilamentYarn';
import ReprocessGranulesPage from './pages/Products/Granules';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <AppButtons />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Products Nested Routes */}
        <Route path="/products">
          <Route path="pp-fabric" element={<PPFabricPage />} />
          <Route path="pp-bags" element={<PPBagsPage />} />
          <Route path="monolayer-films" element={<MonolayerFilmsPage />} />
          <Route path="multifilament-yarn" element={<MultifilamentYarnPage />} />
          <Route path="reprocess-granules" element={<ReprocessGranulesPage />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
