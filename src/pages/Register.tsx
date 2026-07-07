import { useForm } from "react-hook-form";
import "./Register.css";
import { data, Link } from "react-router-dom";

function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Register to continue shopping</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Enter Name" />

          <input type="email" placeholder="Enter Email" />

          <input type="password" placeholder="Enter Password" />

          <input type="tel" placeholder="Enter Phone Number" />

          <div className="gender-group">
            <label>Gender</label>

            <div className="gender-options">
              <label>
                <input type="radio" name="gender" value="Male" />
                Male
              </label>

              <label>
                <input type="radio" name="gender" value="Female" />
                Female
              </label>

              <label>
                <input type="radio" name="gender" value="Other" />
                Other
              </label>
            </div>
          </div>

          <button type="submit">Create Account</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
