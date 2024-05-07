import axiosSecure from ".";

export const getAllRooms = async () => {
  const { data } = await axiosSecure("/rooms");
  return data;
};

export const getCoupleRooms = async () => {
  const { data } = await axiosSecure("/rooms/couple");
  return data;
};

export const getFeaturedRooms = async () => {
  const { data } = await axiosSecure("/rooms/featured");
  return data;
};

export const getRoom = async (id) => {
  const { data } = await axiosSecure(`/room/${id}`);
  return data
};

export const addRoom = async (roomData) => {
  const { data } = await axiosSecure.post(`/rooms`, roomData);
  return data;
};

export const getHostRooms = async (email) => {
  const { data } = await axiosSecure(`/rooms/${email}`);
  return data;
};
