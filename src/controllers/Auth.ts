// import axios from "../services/databaseService";

import axios from "axios";

export const registerRequest = async (user: any) => axios.post(`/auth/register`, user);

export const loginRequest = async (user: any) => axios.post(`/auth/login`, user);

export const verifyTokenRequest = async () => axios.get(`/auth/verify`);
