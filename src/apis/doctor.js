import axios from "./axios";
import { API_ROUTES } from "../utils/api_routes";

const DOCTOR_LOGIN = API_ROUTES.DOCTOR_LOGIN;
const DOCTOR_REGISTRATION = API_ROUTES.DOCTOR_REGISTRATION;

export const doctorRegistration = async (formData) => {
  const response = await axios.post(DOCTOR_REGISTRATION, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const doctorLogin = async (formData) => {
    const response = await axios.post(DOCTOR_LOGIN, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
};

export const getAllDoctors = async () => {
  try {
    const response = await axios.get(API_ROUTES.ALL_DOCTORS, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.data;
    toast.success("Doctors fetched successfully");
    return data;
  } catch (error) {
    console.error("Fetching Doctors Error:", error);
    toast.error("Failed to fetch doctors");
    return null;
  }
};

export const getDoctorsAvailability = async (dateObj) => {
  const token = localStorage.getItem("token");

  const formattedDate = dateObj.toISOString().split("T")[0];

  try {
    const response = await axios.get(
      `${API_ROUTES.DOCTOR_SLOTS}?date=${encodeURIComponent(formattedDate)}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const slots = response.data.availableSlots
      .filter(slot => !slot.isBooked)
      .map((slot) => {
        const start = new Date(slot.startTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: 'UTC',
        });
        const end = new Date(slot.endTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: 'UTC',
        });
        return `${start} - ${end}`;
      });

    return slots;
  } catch (error) {
    console.error("Failed to get Doctor's Slots", error);
    return [];
  }
};



