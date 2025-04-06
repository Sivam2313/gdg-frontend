import * as React from "react";
import { useEffect, useState } from "react";
import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export function AppSidebar(props) {
  const [userType, setUserType] = useState(localStorage.getItem("user"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUserType(localStorage.getItem("user"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const navItems = [
    {
      title: "Getting Started",
      url: "#",
      items: [
        ...(userType === "Doctor"
          ? [{ title: "Set Schedule", url: "/set-schedule" }]
          : []),
        { title: "My appointments", url: "/my-appointments" },
        { title: "Create Appointment", url: "/create-appointment" },
        ...(userType === "Doctor"
          ? [{ title: "Tickets", url: "/tickets" }]
          : []),
      ],
    },
  ];

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={["1.0.0"]} defaultVersion="1.0.0" />
      </SidebarHeader>
      <SidebarContent>
        {navItems.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
