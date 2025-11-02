import axios from "./axios";

async function signup({ name, email, password }) {
  const {
    data: { data },
  } = await axios({
    method: "post",
    url: "/api/auth/signup",
    data: {
      name,
      email,
      password,
    },
  });
  return data;
}

async function signin({ email, password }) {
  const {
    data: { data },
  } = await axios({
    method: "post",
    url: "/api/auth/signin",
    data: {
      email,
      password,
    },
  });
  return data;
}

export const authApi = {
  signup,
  signin,
};
