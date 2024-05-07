import axiosSecure from ".";

// save user data in DB
export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "guest",
    status: "Verified",
  };

  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};

// get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", { email });
  console.log("token received from server");
  return data;
};

// clear token from browser
export const clearCookie = async (email) => {
  const { data } = await axiosSecure.get("/logout", email);
  console.log("token cleared from server");
  return data;
};

// get user roll
export const getRole = async (email) => {
  const { data } = await axiosSecure.get(`/user/${email}`);
  return data.role;
};

export const getAllUsers = async () => {
  const { data } = await axiosSecure.get(`/users`);
  return data;
};

export const updateRole = async ({ email, role }) => {
  const currentUser = {
    email,
    role,
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser);
  return data;
};

export const becomeHost = async (email) => {
  const currentUser = {
    email,
    status: "Requested",
  };
  const { data } = await axiosSecure.put(`/users/${email}`, currentUser);
  return data;
};
