import { useForm } from "react-hook-form";
import "./Register.css";
import { data, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Registered Successfully");
    reset();
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Register to continue shopping</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Enter Name" {...register("name")} />
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

          <input
            type="tel"
            placeholder="Enter Phone Number"
            {...register("phone")}
          />

          <div className="gender-group">
            <label>Gender</label>

            <div className="gender-options">
              <label>
                <input type="radio" value="Male" {...register("gender")} />
                Male
              </label>

              <label>
                <input type="radio" value="Female" {...register("gender")} />
                Female
              </label>

              <label>
                <input type="radio" value="Other" {...register("gender")} />
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
