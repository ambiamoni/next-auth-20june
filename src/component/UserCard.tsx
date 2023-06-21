"use client"
import React from "react";

function UserCard({ user}:any) {
   
  return (
      <div key={user.id}
      onClick={()=>{
        alert("The user is" + user.name)
      }}>
      <h1>{user.name}</h1>
      <span>{user.address.city}{user.address.stret}</span>
    </div>
  );
}

export default UserCard;
