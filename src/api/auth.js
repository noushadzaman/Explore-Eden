import axiosSecure from ".";

// save user data in DB
export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "guest",
    status: "verified",
  };

  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};

// get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", email);
  console.log("token received from server");
  return data;
};

// clear token from browser
export const clearCookie = async (email) => {
  const { data } = await axiosSecure.get("/logout", email);
  console.log("token cleared from server");
  return data;
};