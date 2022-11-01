import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { TextField } from "@material-ui/core";
import queryClient from "../../api/queryClient";
import { Room } from "../../types";
import { useForm } from "react-hook-form";

type Props = {};

const createRoom = async (data: Room) => {
  const { data: response } = await axios.post(
    "http://localhost:8000/api/room/post",
    data
  );
  return response.data;
};

export const RoomCreation = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Room>({
    mode: "onChange",
  });
  const { mutate, isLoading } = useMutation({
    mutationFn: createRoom,
    onSuccess: (newRoom) => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      reset();
    },
  });

  const onSubmit = (data: Room) => {
    const room = {
      ...data,
    };
    mutate(room);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={Boolean(errors.name)}
          {...register("name")}
          fullWidth
          id='name'
          disabled={isLoading}
          label='Name'
          margin='dense'
          name='name'
          type='text'
          variant='outlined'
        />
      </form>
    </div>
  );
};
