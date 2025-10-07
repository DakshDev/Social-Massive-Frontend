import Image from "next/image";
import Link from "next/link";
import BioExpander from "./components/bio-expander";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, LinkIcon, Settings } from "lucide-react";

type UserType = {
  avatar: null | string;
  bio: null | string;
  birth: Date;
  createdAt: Date;
  email: string;
  gender: null | string;
  name: string;
  username: string;
  website: null | string;
};

// async function Header({ userInfo }: { userInfo: UserType }) {
//   const { avatar, bio, birth, createdAt, email, gender, name, username, website } = userInfo;
//   return (
//     <header className="flex justify-center gap-6 p-5 bg-accent/50 rounded-sm relative">
//       {/* Logo */}
//       <div className="self-center relative size-fit flex justify-center items-center">
//         <Image
//           alt="profile pic"
//           src="/images/avatar.jpg"
//           height={100}
//           width={100}
//           className="size-35 object-cover object-center rounded-full border-2 border-border"
//           priority={true}
//         />
//         <div className="absolute left-0 top-0 size-full z-10"></div>
//       </div>
//       {/* About */}
//       <div className="max-w-xs text-sm">
//         <h1 className="capitalize text-lg">{name}</h1>
//         <h2 className="lowercase mt-1">{username}</h2>
//         <Link href={"/"} target="_blank" className="lowercase flex items-center gap-1">
//           <LinkIcon className="size-3.5" />
//           https://Website.com
//         </Link>
//         <BioExpander content={bio} />
//         <div className="flex gap-2 items-center mt-2">
//           <Button variant="secondary">Followers 10</Button>
//           <Button variant="secondary">Followings 5</Button>
//         </div>
//       </div>
//       {/* Absolute Setting Icon */}
//       <div className="absolute top-2 right-2 flex gap-2">
//         <Button variant="secondary" className="size-8 p-1 box-border">
//           <EllipsisVertical className="size-5" />
//         </Button>
//         <Button variant="secondary" className="size-8 p-1 box-border">
//           <Settings className="size-5" />
//         </Button>
//       </div>
//     </header>
//   );
// }

async function Header({ userInfo }: { userInfo: UserType }) {
  const { avatar, bio, birth, createdAt, email, gender, name, username, website } = userInfo;
  return (
    <header className="relative">
      <div className="h-60 bg-teal-400 rounded-sm relative">
        <Image
          alt="profile pic"
          src="/images/avatar.jpg"
          height={100}
          width={100}
          className="h-4/5 w-auto object-cover object-center rounded-full border-2 border-border absolute left-0 -bottom-10"
          priority={true}
        />
      </div>
    </header>
  );
}

export default Header;
