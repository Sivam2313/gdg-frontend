import { GalleryVerticalEnd } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientLogin } from "@/apis/patient";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { jwtDecode } from "jwt-decode";

export function PatientLoginForm({
  className,
  ...props
}) {
  const [contact,setContact] = useState();
  const [name,setName] = useState();
  const navigate = useNavigate();

  const submitHandler = async(event) =>{
    event.preventDefault();
    try {
      const formData = {
        "name":name,
        "phone":contact
      }
      const response = await patientLogin(formData);
      localStorage.setItem('token',response.token);
      console.log(response)
      navigate('/patient-appointments')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome Back to MedConnect.</h1>
            <div className="text-center text-sm">
                Login to book an appointment
            </div>
          </div>
          <div className="flex flex-col gap-6">
            
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" onChange={(e)=>setName(e.target.value)} placeholder="John Doe" required />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input id="phone-number" type="text" onChange={(e)=>setContact(e.target.value)} placeholder="9547033470" required />
            </div>
            
            <Button type="submit" className="w-full" onClick={submitHandler}>
              Login
            </Button>
          </div>
        </div>
      </form>
      <div
        className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
