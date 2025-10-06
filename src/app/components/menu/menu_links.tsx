"use client";
import { Bell, House, MessageCircle, MonitorUp, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MenuLinks() {
  const pathname = usePathname();
  const [menuLinks, setMenuLinks] = useState([
    { icon: <House className='size-5' />, href: "/", name: "Feed" },
    { icon: <Search className='size-5' />, href: "/explore", name: "Explore" },
    { icon: <MessageCircle className='size-5' />, href: "/message", name: "Messages" },
    { icon: <Bell className='size-5' />, href: "/notification", name: "Notifications" },
    { icon: <MonitorUp className='size-5' />, href: "/upload", name: "Upload Post" },
    { icon: <House className='size-5' />, href: "/profile", name: "Profile" },
  ]);

  useEffect(() => {
    // 🧠 Extract username cookie from browser
    const username = document.cookie
      .split("; ")
      .find((row) => row.startsWith("username="))
      ?.split("=")[1];

    // If found, update the "Profile" link
    if (username) {
      setMenuLinks((prev) => {
        const updated = [...prev];
        const index = updated.findIndex((each) => each.name.toLowerCase() === "profile");
        if (index !== -1) {
          updated[index].href = `/@${decodeURIComponent(username).toLowerCase()}`;
        }
        return updated;
      });
    }
  }, []);

  return (
    <ol>
      {menuLinks.map((each) => (
        <li key={each.href}>
          <Link
            className={`flex  px-4 py-2 items-center gap-2 rounded-sm hover:bg-accent ${pathname == each.href && "bg-accent"}`}
            href={each.href}
          >
            {each.icon} <span className='max-lg:hidden'>{each.name}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
