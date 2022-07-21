import React from 'react';
import Home from "./pages/home/Home";
import Login from "./components/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./components/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import PersonIcon from '@mui/icons-material/Person';
function App() {
  // return <Profile />
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )


}

export default App;
