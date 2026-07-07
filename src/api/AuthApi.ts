import type { LoginRequest } from "../interface/LoginRequest";
import type { RegisterRequest } from "../interface/RegisterRequest";
import { axiosInstance } from "./AxiosConfig";

export const registerUser = (data: RegisterRequest) => {
  return axiosInstance.post("/customer/signup", data);
};

export const loginUser = (data: LoginRequest) => {
  return axiosInstance.post("/customer/login", data);
};
