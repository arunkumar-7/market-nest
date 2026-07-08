import { useForm } from "react-hook-form";
import "./Register.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { register } from "../service/AuthService";

function Register() {
  const {
    register: registerField,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<RegisterRequest>();

  const onSubmit = async (data: RegisterRequest) => {
    try {
      const response = await register(data);

      console.log(response.data);

      toast.success(response.data.message);

      reset();
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Register to continue shopping</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter Name"
            {...registerField("name")}
          />

          <input
            type="email"
            placeholder="Enter Email"
            {...registerField("email")}
          />

          <input
            type="password"
            placeholder="Enter Password"
            {...registerField("password")}
          />

          <input
            type="tel"
            placeholder="Enter Phone Number"
            {...registerField("phone")}
          />

          <div className="gender-group">
            <label>Gender</label>

            <div className="gender-options">
              <label>
                <input type="radio" value="MALE" {...registerField("gender")} />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  value="FEMALE"
                  {...registerField("gender")}
                />
                Female
              </label>

              <label>
                <input
                  type="radio"
                  value="OTHER"
                  {...registerField("gender")}
                />
                Other
              </label>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
