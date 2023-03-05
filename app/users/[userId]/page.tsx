import getAllUsers from "@/lib/getAllUsers";
import getUser from "@/lib/getUser";
import { Metadata } from "next";
import Link from "next/link";

type Params = {
  params: {
    userId: string;
  };
};

export const metadat: Metadata = {
  title: "single user",
};

export default async function UserPage({ params: { userId } }: Params) {
  console.log(userId);

  const userData: Promise<User> = getUser(userId);

  const user = await userData;
  return (
    <div>
      <h2>This is {user.name}</h2>
      <p>my email is {user.email}</p>
      <p>my address is {user.address.street}</p>

      <Link href={`/users/${user.id}/posts`}>
        <button>See All Posts</button>
      </Link>
    </div>
  );
}
