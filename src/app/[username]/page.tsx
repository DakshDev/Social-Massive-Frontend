import { getUser } from "@/utils/apis";
import { notFound } from "next/navigation";

export interface ProfilePageProps {
  params: { username: string };
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { username } = await params;
  const countUnique = (username.match(/%40/g) || []).length;
  if (countUnique != 1) return notFound();
  const filtered_username = username.split("").splice(3).join("");
  if (!username.startsWith("%40")) return notFound();
  const response = await getUser(filtered_username.toLocaleLowerCase());
  console.log(filtered_username);
  if (response === null) return notFound();

  return <div>{JSON.stringify(response?.user)}</div>;
};

export default ProfilePage;
