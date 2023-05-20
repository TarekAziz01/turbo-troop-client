import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import NotFoundImage from "../../assets/images/login.png";

const Login = () => {
  
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
     .then((result) => {
       const user = result.user;
       console.log(user);
       navigate(from, {replace: true})
      })
      .catch((error) => console.log(error));
  };

  const backgroundStyle = {
    backgroundImage: `url(${NotFoundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="hero min-h-screen bg-base-200" style={backgroundStyle}>
      <div className="hero-content ">
        <div className="card  shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p onClick={() => setShow(!show)}>
                  <small>
                    {show ? (
                      <span>Hide Password</span>
                    ) : (
                      <span>Show Password</span>
                    )}
                  </small>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-success" type="submit" value="Login" />
            </div>
            <p className="mt-2">
              New here?
              <Link className="text-rose-400 font-bold" to="/register">
                Register
              </Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline">
              <FaGoogle className="text-green-500 mr-2" /> Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
