import { getUser } from "@/utils/apis";
import { notFound } from "next/navigation";

export interface ProfilePageProps {
  params: { username: string };
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { username } = await params;
  const response = await getUser(username);
  if (response === null) return notFound();
  console.log(response);

  return <div>{JSON.stringify(response?.user)}</div>;
};

export default ProfilePage;
