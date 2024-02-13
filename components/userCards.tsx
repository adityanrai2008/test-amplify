// components/UserCard.tsx
import UserData from "@/types/userData";
import React from "react";

interface UserCardProps {
  user: UserData;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <img src={user?.picture?.large} alt={user?.name?.first} />
      <h2>{`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
