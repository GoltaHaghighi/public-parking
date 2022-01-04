import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

//Components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Landing from "./components/Landing"
import NotFound from './components/NotFound';
import AboutUs from "./components/AboutUs";
import Reservation from './components/Reservation';
import Rules from './components/Rules';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/notfound" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

