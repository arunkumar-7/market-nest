import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { axiosInstance } from "./AxiosConfig";

export const registerUser = (data: RegisterRequest) => {
  return axiosInstance.post("/customer/signup", data);
};

export const loginUser = (data: LoginRequest) => {
  return axiosInstance.post("/customer/login", data);
};
