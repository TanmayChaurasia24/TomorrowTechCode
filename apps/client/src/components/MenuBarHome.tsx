import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
  IconPaint,
  IconTerminal2,
} from "@tabler/icons-react";
import { useState, useEffect } from "react"; // Import useState
import { FaBookOpenReader } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

interface linkitem {
  title: string,
  icon: JSX.Element,
  href: string
}

export function FloatingDockDemo() {
  const [links, setLinks] = useState<linkitem[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLinks([
        {
          title: "Home",
          icon: <IconHome className="h-full w-full text-neutral-300" />,
          href: "/",
        },
        {
          title: "Read blogs",
          icon: <FaBookOpenReader color="white" />,
          href: "/bulk",
        },
        {
          title: "Logout",
          icon: <IconTerminal2 className="h-full w-full text-neutral-300" />,
          href: "/logout",
        },
        {
          title: "Write",
          icon: <TfiWrite color="white" />,
          href: "/create",
        },
        {
          title: "Clients",
          icon: <IconExchange className="h-full w-full text-neutral-300" />,
          href: "/connect",
        },
        {
          title: "GitHub",
          icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
          href: "https://github.com/TanmayChaurasia24/TTM",
        },
        {
          title: "Profile",
          icon: <IconPaint className="h-full w-full text-neutral-300" />,
          href: "/profile",
        },
      ]);
    } else {
      setLinks([
        {
          title: "Home",
          icon: <IconHome className="h-full w-full text-neutral-300" />,
          href: "/",
        },
        {
          title: "Read blogs",
          icon: <FaBookOpenReader color="white" />,
          href: "/bulk",
        },
        {
          title: "Signup",
          icon: <IconTerminal2 className="h-full w-full text-neutral-300" />,
          href: "/signup",
        },
        {
          title: "Login",
          icon: <IconNewSection className="h-full w-full text-neutral-300" />,
          href: "/login",
        },
        {
          title: "Write",
          icon: <TfiWrite color="white" />,
          href: "/create",
        },
        {
          title: "Clients",
          icon: <IconExchange className="h-full w-full text-neutral-300" />,
          href: "/connect",
        },
        {
          title: "GitHub",
          icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
          href: "https://github.com/TanmayChaurasia24/TTM",
        },
      ]);
    }
  }, []); 

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links} 
      />
    </div>
  );
}
