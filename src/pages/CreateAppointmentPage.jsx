import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Dermatologist",
  },
  {
    id: 3,
    name: "Dr. Michael Johnson",
    specialization: "Pediatrician",
  },
  {
    id: 4,
    name: "Dr. Sarah Williams",
    specialization: "Orthopedic Surgeon",
  },
  {
    id: 5,
    name: "Dr. David Brown",
    specialization: "Neurologist",
  },
  {
    id: 6,
    name: "Dr. Emily Davis",
    specialization: "Gastroenterologist",
  },
  {
    id: 7,
    name: "Dr. Robert Wilson",
    specialization: "Psychiatrist",
  },
  {
    id: 8,
    name: "Dr. Jennifer Taylor",
    specialization: "Ophthalmologist",
  },
  {
    id: 9,
    name: "Dr. Christopher Anderson",
    specialization: "Endocrinologist",
  },
  {
    id: 10,
    name: "Dr. Jessica Martinez",
    specialization: "Urologist",
  },
];

export default function CreateAppointMentPage() {
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Create an Appointment
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-2 mb-8">
        Provide the necessary details and select a doctor to schedule your
        appointment.
      </p>

      <div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-2">Explain your symptoms</Label>
          <Textarea placeholder="Type your message here." id="message-2" />
          <p className="text-sm text-muted-foreground">
            Your symptoms will be used the suggest you appropriate doctors
          </p>
          <div className="flex items-end justify-end mt-4">
            <Button>Find Doctors</Button>
          </div>
        </div>

        <Table>
          <TableCaption>A list of suggested doctors.</TableCaption>

          {/* Table Header */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Doctor Name</TableHead>
              <TableHead>Specialization</TableHead>
              {/* <TableHead className="text-right">Time Slot</TableHead> */}
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell className="font-medium">{doctor.name}</TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell className="text-right">
                  <Link to={`/create-appointment/${doctor.id}`}>
                    <Button variant="link">Book Appointment</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
