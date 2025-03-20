import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import DoctorLogin from './components/DoctorLogin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />
      </Routes>
    </>
  )
}

export default App
