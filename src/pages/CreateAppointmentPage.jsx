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
import { useEffect, useState } from "react";
import { getAllDoctors } from "@/apis/doctor";
import { findDoctors } from "@/apis/patient";

export default function CreateAppointMentPage() {
  const [doctors,setDoctors] = useState([])
  const [symptoms,setSymptoms] = useState();
  
  async function fetch(){
    const response = await getAllDoctors();
    console.log(response);
    
    setDoctors(response);
  }

  useEffect(()=>{
    console.log(doctors);
    
    if(doctors.length === 0)
      fetch();
  },[doctors])

  const submitHandler = async ()=>{
    const formData = {
      "symptoms":symptoms
    }
    const response = await findDoctors(formData);
    
    setDoctors(response.recommendedDoctors)
  }

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
          <Textarea placeholder="Type your message here." onChange={(e)=>setSymptoms(e.target.value)} id="message-2" />
          <p className="text-sm text-muted-foreground">
            Your symptoms will be used the suggest you appropriate doctors
          </p>
          <div className="flex items-end justify-end mt-4 cursor">
            <Button onClick={submitHandler}>Find Doctors</Button>
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
                  <Link to={`/create-appointment/${doctor._id}`}>
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
