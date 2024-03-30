import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar"; 
import Login from "./pages/Login";
import Register from "./pages/Register"; 
import Homepage from "./pages/Homepage";
import Bookticket from "./pages/Bookticket"; 


export default function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/bookticket' element={<Bookticket />} />
        </Routes>
      </div>
    </Router>
  );
}