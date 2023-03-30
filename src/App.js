// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/loginPage/LoginPage';
import Homepage from './components/homePage/Homepage';

function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<LoginPage/>}/> 
      <Route path="/home" element={<Homepage/>} />

      </Routes>

    </Router>
    
  );
}

export default App;
