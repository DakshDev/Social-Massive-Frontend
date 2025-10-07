import { getUser } from "@/utils/apis";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Header from "./header";
import InnerSections from "./inner_sections";

export interface ProfilePageProps {
  params: { username: string };
}

// Main page
async function Page({ params }: ProfilePageProps) {
  const { username } = await params;
  const countUnique = (username.match(/%40/g) || []).length;
  if (countUnique != 1) return notFound();
  const filtered_username = username.split("").splice(3).join("");
  if (!username.startsWith("%40")) return notFound();

  return (
    <div>
      <Suspense fallback={<p>Loading data...</p>}>
        <Profile username={filtered_username} />
      </Suspense>
    </div>
  );
}

async function Profile({ username }: { username: string }) {
  const userInfo = await getUser(username);
  if (userInfo === null) return notFound();

  return (
    <div className="w-full mx-auto">
      <Header userInfo={userInfo} />
      <div className="grid grid-cols-3">
        <InnerSections />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus excepturi
          voluptatibus adipisci minima tenetur! Natus neque veritatis deserunt aperiam. Expedita
          cumque neque earum aliquam id soluta repudiandae consectetur ea?
        </div>
      </div>
    </div>
  );
}

export default Page;
