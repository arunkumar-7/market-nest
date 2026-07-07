import type { LoginRequest } from "../interface/LoginRequest";
import type { RegisterRequest } from "../interface/RegisterRequest";
import { loginUser, registerUser } from "../api/AuthApi";

export const register = (data: RegisterRequest) => {
  return registerUser(data);
};

export const login = (data: LoginRequest) => {
  return loginUser(data);
};
