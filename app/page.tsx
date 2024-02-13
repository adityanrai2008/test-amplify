"use client";

import React, { useState, useEffect } from "react";
import UserCard from "@/components/userCards";
import UserData from "@/types/userData";

export default function Home() {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setUsers(data.results as UserData[]);
      })
      .catch((e) => console.log(e));
  }, []); // Empty dependency array to run only once when component mounts

  if (users.length === 0) return <data>Fetching</data>;

  return (
    <div>
      {users &&
        users.map((user: UserData) => {
          return <UserCard key={user.email} user={user} />;
        })}{" "}
    </div>
  );
}
