import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Room } from "../../types";
import axios from "axios";
import { RoomCreation } from "../RoomCreation/RoomCreation";

export const Rooms = () => {
  const { data, isLoading } = useQuery<Room[]>({
    queryKey: ["rooms"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8000/api/room/getAll");
      return response.data;
    },
  });

  if (isLoading || !data) {
    return null;
  }

  console.log(data);

  // return <p>toto</p>;
  return (
    <div>
      <ul>
        {data?.map((room: Room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
      <RoomCreation />
    </div>
  );
};
