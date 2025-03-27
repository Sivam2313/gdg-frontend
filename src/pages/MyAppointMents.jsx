import { getAppointment } from "@/apis/appointments";
import { showAppointments } from "@/apis/patient";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

// const appointments = [
//   {
//     id: "a1b2c3-d4e5f6-g7h8i9",
//     patientName: "Alice Johnson",
//     shortDescription: "Migraine",
//     slot: "09:00 AM - 10:00 AM",
//     date: "2025-03-24",
//   },
//   {
//     id: "j2k3l4-m5n6o7-p8q9r0",
//     patientName: "Mark Spencer",
//     shortDescription: "Back Pain",
//     slot: "10:00 AM - 11:00 AM",
//     date: "2025-03-24",
//   },
//   {
//     id: "s1t2u3-v4w5x6-y7z8a9",
//     patientName: "Sophia Lee",
//     shortDescription: "Allergy Consultation",
//     slot: "11:00 AM - 12:00 PM",
//     date: "2025-03-25",
//   },
//   {
//     id: "b2c3d4-e5f6g7-h8i9j0",
//     patientName: "David Kim",
//     shortDescription: "General Checkup",
//     slot: "01:00 PM - 02:00 PM",
//     date: "2025-03-25",
//   },
//   {
//     id: "k1l2m3-n4o5p6-q7r8s9",
//     patientName: "Emma Watson",
//     shortDescription: "Flu Symptoms",
//     slot: "02:00 PM - 03:00 PM",
//     date: "2025-03-26",
//   },
//   {
//     id: "t1u2v3-w4x5y6-z7a8b9",
//     patientName: "Liam Martinez",
//     shortDescription: "Sprained Ankle",
//     slot: "03:00 PM - 04:00 PM",
//     date: "2025-03-26",
//   },
//   {
//     id: "c1d2e3-f4g5h6-i7j8k9",
//     patientName: "Olivia Brown",
//     shortDescription: "Routine Physical",
//     slot: "04:00 PM - 05:00 PM",
//     date: "2025-03-27",
//   },
//   {
//     id: "m1n2o3-p4q5r6-s7t8u9",
//     patientName: "Noah Davis",
//     shortDescription: "Dental Cleaning",
//     slot: "05:00 PM - 06:00 PM",
//     date: "2025-03-27",
//   },
// ];

export default function MyAppointments() {

  const [appointments, setAppointments] = useState([])
  useEffect(()=>{
    const response = showAppointments();
    setAppointments(response);
  },[])
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Your Upcoming Appointments
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-2 mb-8">
        View your scheduled appointments.
      </p>

      <Table>
        <TableCaption>A list of your upcoming appointments.</TableCaption>

        {/* Table Header */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Patient Name</TableHead>
            <TableHead>Issue</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Time Slot</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        {
          appointments.length === 0 && <div>No Appointments Found</div>
        }
        {
          appointments.length > 0 &&
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell className="font-medium">
                  {appointment.patientName}
                </TableCell>
                <TableCell>{appointment.shortDescription}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell className="text-right">{appointment.slot}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        }
      </Table>
    </div>
  );
}
