import axios from "./axios";
import { API_ROUTES } from "../utils/api_routes";

const DOCTOR_LOGIN = API_ROUTES.DOCTOR_LOGIN;
const DOCTOR_REGISTRATION = API_ROUTES.DOCTOR_REGISTRATION;

export const doctorRegistration = async (formData) => {
  const response = await axios.post(DOCTOR_REGISTRATION, {
    headers: {
      "Content-Type": "application/json",
    },
    ...formData
  });
  const data = await response.data;
  console.log("Doctor Registration api called");
  return data;
};

export const doctorLogin = async (formData) => {
    const response = await axios.post(DOCTOR_LOGIN, {
      headers: {
        "Content-Type": "application/json",
      },
      ...formData
    });
    const data = await response.data;
    console.log("Doctor Login api called");
    return data;
  };

export const getAllDoctors = async(formData) => {
  const response = await axios.get(API_ROUTES.ALL_DOCTORS,{
    headers: {
      "Content-Type" : "application/json",
    }
  })
  const data = await response.data;
  return data;
}