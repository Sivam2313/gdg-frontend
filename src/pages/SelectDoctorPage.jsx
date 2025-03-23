import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ConfirmationDialog({ slot = "None", children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Appointment</DialogTitle>
          <DialogDescription>
            You are about to book an appointment for <strong>{slot}</strong>.
            You can view your scheduled appointments in the{" "}
            <strong>Appointments</strong> section.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" >
              Yes, Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "11:00 AM - 12:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
];
export default function SelectDoctorPage() {
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClicked = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Choose a Time Slot
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-2 mb-8">
        Select a preferred time slot to schedule your appointment.
      </p>
      <div className="flex gap-8">
        <Calendar
          selected={date}
          mode="single"
          onSelect={setDate}
          className="border rounded-md shadow"
        />
        <div className="flex flex-col gap-8 flex-1">
          <div className="grid grid-cols-3 gap-4">
            {timeSlots.map((slot, index) => (
              <Button
                key={index}
                variant={selectedSlot === slot ? "default" : "secondary"}
                onClick={() => handleSlotClicked(slot)}
              >
                {slot}
              </Button>
            ))}
          </div>
          <div className="flex justify-end">
            <ConfirmationDialog>
              <Button>Confirm Availability</Button>
            </ConfirmationDialog>
          </div>
        </div>
      </div>
    </div>
  );
}
