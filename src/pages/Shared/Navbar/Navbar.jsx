import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/images/turbo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("Log out seccess");
      })
      .catch((error) => console.log(error));
  };

    const navItems = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allToys">All Toys</Link>
        </li>
        {user && (
          <>
            <li>
              <Link to="/myToys">My Toys</Link>
            </li>
            <li>
              <Link to="/addToy">Add Toy</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </>
    );
    return (
      <div className="navbar bg-emerald-400 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex items-center">
            <img src={logo} alt="Website Logo" className="w-9 h-9" />
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Turbo Troop
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="tooltip tooltip-left " data-tip={user?.displayName}>
              <img
                className="rounded-full mr-2"
                style={{ width: "3rem" }}
                src={user?.photoURL}
              />
            </div>
          )}
          {user ? (
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
        <ToastContainer />
      </div>
    );
};

export default Navbar;