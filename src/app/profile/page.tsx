"use client";
import React, { useEffect, useState } from "react";

function Profile() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl">Profile Page</h1>
      <hr />
     <div className="grid grid-cols-3 gap-5">
       {users.map((user: any) => (
        <div
          key={user.id}
          onClick={() => {
            alert("this is user" + user.name);
          }}
        >
          <h1>{user.name}</h1>
          <span>{user.address.city}</span>
        </div>
      ))}
     </div>
    </div>
  );
}

export default Profile;
