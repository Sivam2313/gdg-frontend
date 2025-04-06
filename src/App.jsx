import './App.css'
import { Route, Routes } from "react-router-dom";
import DoctorRegistrationPage from './pages/DoctorRegistrationPage';
import DoctorLoginPage from './pages/DoctorLoginPage';
import DashBoardLayout from "@/components/DashBoardLayout"
import SetSchedule from "@/pages/SetSchedule"
import MyAppointMents from './pages/MyAppointMents';
import PatientLoginPage from './pages/PatientLoginPage';
import CreateAppointMentPage from './pages/CreateAppointmentPage';
import SelectDoctorPage from './pages/SelectDoctorPage';
import PatientAppointment from './pages/PatientAppointments';
import TicketsPage from "./pages/TicketsPage"

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/doctorregistration" element={<DoctorRegistrationPage/>} />
        <Route path="/doctorlogin" element={<DoctorLoginPage/>} />
        <Route path="/patient-login" element={<PatientLoginPage/>} />
        <Route  element={<DashBoardLayout />}>
          <Route path="/set-schedule" element={<SetSchedule/>} />
          <Route path="/my-appointments" element={<MyAppointMents/>} />
          <Route path="/create-appointment" element={<CreateAppointMentPage/>}/>
          <Route path="/patient-appointments" element={<PatientAppointment/>}/>
          <Route path="/create-appointment/:id" element={<SelectDoctorPage/>}/>
          <Route path="/tickets" element={<TicketsPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
