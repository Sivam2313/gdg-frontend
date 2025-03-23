import './App.css'
import { Route, Routes } from "react-router-dom";
import DoctorRegistrationPage from './pages/DoctorRegistrationPage';
import DoctorLoginPage from './pages/DoctorLoginPage';
import DashBoardLayout from "@/components/DashBoardLayout"
import SetSchedule from "@/pages/SetSchedule"

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/doctorregistration" element={<DoctorRegistrationPage/>} />
        <Route path="/doctorlogin" element={<DoctorLoginPage/>} />
        <Route  element={<DashBoardLayout />}>
          <Route path="/set-schedule" element={<SetSchedule/>} />
          <Route path="/my-appointments" element={<SetSchedule/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
