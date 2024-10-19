import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const user = useSelector((state: any) => state.auth.user);


  return (
    <div className="base">
      <NavBar />
      <div className="flex items-center justify-center h-full">
        {user ? (
          <h1 className="text-3xl font-bold p-5">Hi {user.name}</h1>
        ) : (
          <Link to="/login" className="w-40">
            <button className="submit-button text-center">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomePage;
