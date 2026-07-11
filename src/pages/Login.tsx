import { useForm } from "react-hook-form";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { LoginRequest } from "../interfaces/LoginRequest";
import { login } from "../service/AuthService";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginRequest>();

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response = await login(data);

      toast.success(response.data.message);

      navigate("/");
    } catch (error: any) {
      console.error(error);

      toast.error(error.message || "Login Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Login to continue shopping</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging In..." : "Login"}
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
