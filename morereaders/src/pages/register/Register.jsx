import { Link } from "react-router-dom";
import "./reg.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>SingUp</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Signup</button>
          </form>
          <span>Already have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;