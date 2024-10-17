import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import profilePlaceHolder from "../assets/images/profile-image-placeholder.jpg";
import { getImageURL } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProfilePage = () => {
  const user = useSelector((state: any) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col gap-5">
      <NavBar />

      <div className="container mx-auto p-4 bg-tertiary shadow rounded-lg border border-tertiary flex flex-col gap-4">
        <h2 className="text-2xl font-semibold ">User Details</h2>
        <div className="flex items-center">
          <img
            src={user ? getImageURL(user.profileImage) : profilePlaceHolder}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-white"
          />
          <div className="ml-4">
            <p className="text-lg font-bold">{user?.name || "John Doe"}</p>
            <p className="text-gray-400">{user?.email || "john@example.com"}</p>
            {user?.isAdmin && <p className="text-gray-400">Admin User</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
