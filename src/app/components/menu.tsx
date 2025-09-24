"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav_links = [
  { href: "/", name: "Feed" },
  { href: "/explore", name: "Explore" },
  { href: "/message", name: "Messages" },
  { href: "/notification", name: "Notifications" },
  { href: "/profile", name: "Profile" },
];

function Menu() {
  const pathname = usePathname();

  return (
    <nav className="p-2 bg-sidebar border border-bg-sidebar-border w-80">
      <h1 className="text-2xl font-semibold mb-5 p-4">Post Massive</h1>
      <ol>
        {nav_links.map((each) => (
          <li key={each.href}>
            <Link
              className={`flex gap-2 px-4 py-2 rounded-sm hover:bg-accent ${
                pathname == each.href && "bg-accent"
              }`}
              href={each.href}
            >
              {each.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Menu;
