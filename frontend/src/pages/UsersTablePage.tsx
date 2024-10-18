import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import UsersTable from "../components/UsersTable";
import { dummyUsers } from "../utils/data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UsersTablePage = () => {
  const user = useSelector((state: any) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user || !user.isAdmin) {
    return null;
  }

  return (
    <div className="base">
      <NavBar />
      <UsersTable users={dummyUsers} />
    </div>
  );
};

export default UsersTablePage;
