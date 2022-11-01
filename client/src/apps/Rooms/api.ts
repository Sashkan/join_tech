import axios from "axios";

export const getRooms = async () => {
  const data = axios.get(`${process.env.REACT_APP_API_URL}/rooms`);

  return data;
};
