//import axios from "../services/databaseService";

import axios from "axios";

interface LoginData {
  username: string;
  password: string;
}

export const loginController = async (loginData: LoginData) => {
  const response = await axios.post("/login", {
    loginData: loginData,
  });
  return response.data;
};
