import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import User from './pages/User'

function App() {
  const checkToken  =()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      return true
    }else {
      return false
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={checkToken() ? <User /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
