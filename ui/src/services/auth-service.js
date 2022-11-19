export const saveToken = async (data) => {
  console.log("set user", data);
  localStorage.clear();
  localStorage.setItem("user", JSON.stringify(data));
};

export const getToken = async () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).token
    : null;
};

export const getUser = async () => {
  try {
    let user = localStorage.getItem("user");
    if (user.length > 0) {
      let u = JSON.parse(user);
      console.log("existing user: ", u);
      return u;
    } else return null;
  } catch (error) {
    return null;
  }
};

export const extractToken = async () => {
  let getuser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const decoded = null;
  //jwt_decode(getUser.token);
  console.log("token extracted:", decoded, getuser);
  return decoded;
};

export const clearToken = async () => {
  localStorage.clear();
};
