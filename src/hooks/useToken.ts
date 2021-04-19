import { useState } from "react";
const useToken = () => {
  const getToken = () => {
    const token = localStorage.getItem("token");
    return token; 
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return { token, setToken: saveToken };
};

export { useToken };
