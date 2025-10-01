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
  // const response = await getUser(username);
  // console.log(response);
  // if (response === null) return notFound();

  return (
    <div className="max-w-6xl w-full mx-auto p-4">
      <Header />
      <InnerSections />
    </div>
  );
}

export default Page;
