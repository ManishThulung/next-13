import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";

export const metadat: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;
  console.log("Users", users);

  return (
    <div>
      <h2>All Users</h2>

      {users.map((user) => (
        <p key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </div>
  );
}
