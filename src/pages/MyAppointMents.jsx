import { getAppointment } from "@/apis/appointments";
import { showAppointments } from "@/apis/appointments";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const response = await showAppointments();
        setAppointments(response);
      } catch (err) {
        console.error("Failed to fetch appointments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatAppointmentTime = (startTime, endTime) => {
    const formatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'UTC'
    };

    try {
      const start = new Date(startTime).toLocaleTimeString([], formatOptions);
      const end = new Date(endTime).toLocaleTimeString([], formatOptions);

      const [startTimeFormatted, startPeriod] = start.split(' ');
      const [endTimeFormatted, endPeriod] = end.split(' ');

      return startPeriod === endPeriod
        ? `${startTimeFormatted} - ${endTimeFormatted} ${endPeriod}`
        : `${start} - ${end}`;
    } catch (error) {
      console.error('Error formatting time:', error);
      return 'Invalid time';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Your Upcoming Appointments
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-2 mb-8">
        View your scheduled appointments.
      </p>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <Table>
          <TableCaption>A list of your upcoming appointments.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time Slot</TableHead>
              <TableHead>Meeting Link</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No appointments found
                </TableCell>
              </TableRow>
            ) : (
              appointments.map((appointment) => (
                <TableRow key={appointment._id}>
                  <TableCell className="font-medium">
                    {localStorage.getItem('user') === 'Doctor' ?
                      `Patient ID:  ${appointment.patientId._id}` :
                      `Doctor ID: ${appointment.doctorId._id}`}
                  </TableCell>
                  <TableCell>{formatDate(appointment.date)}</TableCell>
                  <TableCell>
                    {formatAppointmentTime(appointment.startTime, appointment.endTime)}
                  </TableCell>
                  <TableCell>
                    <a
                      href={appointment.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Join Meeting
                    </a>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant={appointment.status ? 'default' : 'destructive'}>
                      {appointment.status ? 'Confirmed' : 'Cancelled'}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}