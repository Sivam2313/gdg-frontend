import { GalleryVerticalEnd } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DoctorRegistrationFrom({
  className,
  ...props
}) {
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
            <h1 className="text-xl font-bold">Welcome to MedConnect.</h1>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Name</Label>
              <Input id="email" type="email" placeholder="John Doe" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Specialization</Label>
              <Input id="email" type="email" placeholder="General Physician" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Contact</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Credentials</Label>
              <Input id="email" type="email" placeholder="FjKIL@j" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Address</Label>
              <Input id="email" type="email" placeholder="Hall 1, NIT Durgapur, west bengal" required />
            </div>
            <Button type="submit" className="w-full">
              Sign in as a doctor
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
