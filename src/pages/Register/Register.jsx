import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import NotFoundImage from "../../assets/images/login.png";

const Register = () => {
  const [show, setShow] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log(name, email,photo, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        user.displayName = name
        user.photoURL = photo
        console.log(user);
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
      <div className="hero-content">
        <div className="card max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-5xl font-bold text-center">Register</h1>
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
        </div>
      </div>
    </div>
  );
};

export default Register;