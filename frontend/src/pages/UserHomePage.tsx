import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const UserHomePage: React.FC = () => {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <div className="min-h-screen bg-gray-200">
      <NavBar />
      <div className="flex items-center justify-center h-full">
        {user ? (
          <h1 className="text-3xl font-bold p-10">Hi {user.name}</h1>
        ) : (
          <Link
            to="/login"
            className="submit-button max-w-40 text-center mt-10"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserHomePage;
