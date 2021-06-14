import axios, { AxiosResponse } from "axios";

const register = async (user: {
  name: string;
  email: string;
  password: string;
}) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  const body = {
    name: user.name,
    email: user.email,
    password: user.password,
  };

  let response: AxiosResponse;
  try {
    response = await axios.post("/auth/register", body, config);
  } catch (e) {
    console.log(`user_services[register] failed: ${e}`);
    return;
  }

  return response.data;
};

const login = async (user: { email: string; password: string }) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  const body = {
    email: user.email,
    password: user.password,
  };

  let response: AxiosResponse;
  try {
    response = await axios.post("/auth/login", body, config);
  } catch (e) {
    console.log(`user_services[register] failed: ${e}`);
    return;
  }

  return response.data;
};

export { register, login };
