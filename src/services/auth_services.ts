import axios, { AxiosResponse } from "axios";
const register = async (user: {
  name: string;
  email: string;
  password: string;
}) => {
  //send post request to the server
  try {
    const response: AxiosResponse = await axios.post(
      "http://localhost:3000/register",
      {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (e) {
    console.log(`user_services[register] failed: ${e}`);
    return;
  }
};

export { register };
