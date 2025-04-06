import axios from "./axios";
import { API_ROUTES } from "../utils/api_routes";

const PATIENT_LOGIN = API_ROUTES.PATIENT_LOGIN;
const PATIENT_REGISTRATION = API_ROUTES.PATIENT_REGISTRATION;

export const patientRegistration = async (formData) => {
  const response = await axios.post(PATIENT_REGISTRATION, {
    headers: {
      "Content-Type": "application/json",
    },
    ...formData
  });
  const data = await response.data;
  console.log("Patient Registration api called");
  return data;
};

export const patientLogin = async (formData) => {
    
    const response = await axios.post(PATIENT_LOGIN, {
      headers: {
        "Content-Type": "application/json",
      },
      ...formData
    });
    const data = await response.data;
    console.log("Patient Login api called");
    return data;
  };

  export const findDoctors = async (formData) => {
    const token = localStorage.getItem("token");

    const response = await axios.get(API_ROUTES.PATIENT_BEST_DOCTOR, {
        headers: {
          "Content-Type": "application/json",
          Authorization : `Bearer ${token}`,
        },
        ...formData
      });
      
      const data = await response.data;
      return data;
    };