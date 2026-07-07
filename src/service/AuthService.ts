import type { LoginRequest } from "../interface/LoginRequest";
import type { RegisterRequest } from "../interface/RegisterRequest";
import { loginUser, registerUser } from "../api/AuthApi";

export const register = async (data: RegisterRequest) => {
  const response = await registerUser(data);
  return response;
};

export const login = async (data: LoginRequest) => {
  const response = await loginUser(data);
  return response;
};
