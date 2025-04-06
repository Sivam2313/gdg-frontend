import { GalleryVerticalEnd } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctorLogin } from "../apis/doctor";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast"
import { jwtDecode } from "jwt-decode";

export function DoctorLoginForm({
  className,
  ...props
}) {
  const [contact, setContact] = useState();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await doctorLogin({ contact, credentials });
      console.log(response);
      toast.success("Doctor Logged In successfully!");
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", "Doctor");
      setTimeout(() => navigate("/my-appointments"), 1000);
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Doctor LogIn failed!");
    }
  };


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Toaster position="top-right" reverseOrder={false} />
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
              Don't have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Register
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">

            <div className="grid gap-3">
              <Label htmlFor="email">Contact</Label>
              <Input id="email" type="text" onChange={(e) => setContact(e.target.value)} placeholder="+91 9555555555" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Credentials</Label>
              <Input id="email" type="password" onChange={(e) => setCredentials(e.target.value)} placeholder="FjKIL@j" required />
            </div>

            <Button type="submit" className="w-full" onClick={submitHandler} >
              Log in as a doctor
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
