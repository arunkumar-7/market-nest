import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";

export const register = async (data: RegisterRequest) => {
  const users: RegisterRequest[] = JSON.parse(
    localStorage.getItem("users") || "[]",
  );

  const userExists = users.some((user) => user.email === data.email);

  if (userExists) {
    throw new Error("Email already registered");
  }

  users.push(data);

  localStorage.setItem("users", JSON.stringify(users));

  return {
    data: {
      success: true,
      message: "Customer Registered Successfully",
    },
  };
};

export const login = async (data: LoginRequest) => {
  const users: RegisterRequest[] = JSON.parse(
    localStorage.getItem("users") || "[]",
  );

  const user = users.find(
    (u) => u.email === data.email && u.password === data.password,
  );

  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  return {
    data: {
      success: true,
      message: "Login Successful",
      user,
    },
  };
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser") || "null");
};
