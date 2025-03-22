import './App.css'
import { Route, Routes } from "react-router-dom";
import DoctorRegistrationPage from './pages/DoctorRegistrationPage';
import DoctorLoginPage from './pages/DoctorLoginPage';


function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/doctorregistration" element={<DoctorRegistrationPage/>} />
        <Route path="/doctorlogin" element={<DoctorLoginPage/>} />
      </Routes>
    </>
  )
}

export default App
