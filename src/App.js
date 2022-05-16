import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Apointment from './Pages/Apointment/Apointment';
import SignUp from './Pages/Login/SignUp';
import RequierAuth from './Pages/Login/RequierAuth';


function App() {
  return (
    <div className='mx-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='appointment' element={
          <RequierAuth>
            <Apointment></Apointment>
          </RequierAuth>
        }></Route>
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
