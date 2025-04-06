import axios from "./axios";
import { API_ROUTES } from "../utils/api_routes";

export const getAppointment = async (formData) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(API_ROUTES.CREATE_APPOINTMENT, {
    params: formData,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...formData
  });
  const data = await response.data;
  console.log("Doctor Appointment api called");
  return data;
}

export const showAppointments = async () => {
  const token = localStorage.getItem("token");
  const currentUser = localStorage.getItem("user");
  let response = null;
  if (currentUser == "Patient") {
    response = await axios.get(API_ROUTES.PATIENT_APPOINTMENTS, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
  } else {
    response = await axios.get(API_ROUTES.DOCTOR_APPOINTMENTS, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
  }
  const data = await response.data;
  return data;
}
