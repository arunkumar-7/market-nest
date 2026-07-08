import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
// import { loginUser, registerUser } from "../api/AuthApi";

export const register = async (data: RegisterRequest) => {
  console.log(data);

  return {
    data: {
      success: true,
      message: "Customer Registered Successfully",
    },
  };
};

export const login = async (data: LoginRequest) => {
  console.log(data);

  return {
    data: {
      success: true,
      message: "Login Successful",
    },
  };
};
