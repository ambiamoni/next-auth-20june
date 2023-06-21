import UserCard from "@/component/UserCard";
import React from "react";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

export default async function Users() {
  const users = await getData();
  return (
    <>
      <h1>Profile Page</h1>
      <div className="grid grid-cols-3 m-[20px] gap-5 border-blue-700">
        {users.map((user: any) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </>
  );
}
