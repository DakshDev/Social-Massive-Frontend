import Image from "next/image";
import Link from "next/link";
import BioExpander from "./components/bio-expander";

async function Header() {
  return (
    <div className="flex gap-4 items-center content-center">
      {/* Logo */}
      <div className="relative size-fit">
        <Image
          alt="profile pic"
          src="/avatar.jpg"
          height={100}
          width={100}
          className="size-35 object-cover object-center rounded-full border-2 border-border"
        />
        <div className="absolute left-0 top-0 size-full z-10"></div>
      </div>
      {/* About */}
      <div>
        <h1 className="capitalize">Daksh Kishore</h1>
        <h2 className="lowercase text-sm">username</h2>
        <Link href={"/"} target="_blank" className="lowercase text-blue-500 hover:underline">
          Website
        </Link>
        <BioExpander />
      </div>
    </div>
  );
}

export default Header;
