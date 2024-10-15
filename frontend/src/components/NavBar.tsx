import { useState } from "react";
import profilePlaceHolder from "../assets/images/profile-image-placeholder.jpg";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { getImageURL } from "../utils/utils";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    dispatch(clearAuth());
    navigate("/user-home")
  };
  return (
    <nav className="bg-gray-500 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/user-home">
          <h1 className="text-xl font-bold">User Home</h1>
        </Link>
        <div className="relative">
          {user ? (
            <div className="flex gap-5">
              <img
                src={user ? getImageURL(user.profileImage) : profilePlaceHolder}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={toggleDropdown}
              />
              <button onClick={toggleDropdown} className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-white transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="submit-button max-w-40 text-center mt-10"
            >
              Login
            </Link>
          )}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded">
              <ul className="py-2">
                <Link to="/user-profile">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    User Profile
                  </li>
                </Link>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
