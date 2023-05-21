import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import NotFoundImage from "../../assets/images/login.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [show, setShow] = useState(false);
  const [error, setError]= useState("")

  const { createUser } = useContext(AuthContext);

  const handleTost = () => {
    toast("Register Success");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        user.displayName = name;
        user.photoURL = photo;
        console.log(user);
        setError("");
        form.reset();
        handleTost();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    
  };

   const backgroundStyle = {
     backgroundImage: `url(${NotFoundImage})`,
     backgroundSize: "cover",
     backgroundPosition: "center",
   };

  return (
    <div className="hero min-h-screen bg-base-200" style={backgroundStyle}>
      <div className="hero-content flex-col ">
        <div className="card max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-5xl font-bold text-center">Register</h1>
            <h2 className="text-red-400 mt-5">{error}</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
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
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photo"
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
              <input
                className="btn btn-success"
                type="submit"
                value="Register"
              />
            </div>
            <p className="mt-2">
              Already have an account?{" "}
              <Link className="text-rose-400 font-bold" to="/login">
                Login
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;