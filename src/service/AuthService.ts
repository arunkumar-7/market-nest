import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { loginUser, registerUser } from "../api/AuthApi";

export const register = async (data: RegisterRequest) => {
  return await registerUser(data);
};

export const login = async (data: LoginRequest) => {
  const response = await loginUser(data);

  localStorage.setItem(
    "currentUser",
    JSON.stringify(response.data.data),
  );

  return response;
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
};