import axios from "./axios";
import { API_ROUTES } from "../utils/api_routes";

const DOCTOR_APPOINTMENTS = API_ROUTES.DOCTOR_APPOINTMENTS

export const getAppointment = async (formData) => {
    const token = localStorage.getItem("token");
  const response = await axios.post(API_ROUTES.CREATE_APPOINTMENT, {
    params: formData,
    headers: {
      "Content-Type": "application/json",
      Authorization : `Bearer ${token}`,
    },
    ...formData
  });
  const data = await response.data;
  console.log("Doctor Appointment api called");
  return data;
}
