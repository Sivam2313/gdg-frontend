import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { getDoctorsAvailability } from "@/apis/doctor";

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
];

export default function SetSchedule() {
  const [date, setDate] = useState(new Date());
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);

  const handleSlotClicked = (slot) => {
    setSelectedSlots((prev) =>
      prev.includes(slot)
        ? prev.filter((s) => s !== slot)
        : [...prev, slot]
    );
  };
  useEffect(() => {
    const fetchSlots = async () => {
      if (date) {
        const slots = await getDoctorsAvailability(date);
        if (slots) {
          setAvailableSlots(slots);
        }
      }
    };
  
    fetchSlots();
  }, [date]);
  console.log(availableSlots);
  return (
    <div className="flex flex-col md:flex-row gap-16">
      <div className="flex flex-col justify-between gap-6">
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Set Your Availability
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-2">
            Select the time slots when you are available. You can choose
            multiple slots.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {timeSlots.map((slot, index) => {
            const isAvailable = availableSlots.includes(slot);
            const isSelected = selectedSlots.includes(slot);

            return (
              <Button
                key={index}
                variant={isSelected ? "default" : isAvailable ? "default" : "outline"}
                onClick={() => handleSlotClicked(slot)}
              >
                {slot}
              </Button>
            );
          })}
        </div>

        <Button>Confirm Availability</Button>
      </div>

      <Calendar
        selected={date}
        mode="single"
        onSelect={setDate}
        className="border rounded-md shadow"
      />
    </div>
  );
}
