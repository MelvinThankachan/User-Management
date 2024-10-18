import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import profilePlaceHolder from "../assets/images/profile-image-placeholder.jpg";
import { getImageURL } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profileImage, setProfileImage] = useState<File | string>(
    getImageURL(user.profileImage)
  );
  const [error, setError] = useState("");

  const imageURL =
    typeof profileImage === "string"
      ? profileImage
      : URL.createObjectURL(profileImage);

  const [editingMode, setEditingMode] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name) {
      setError("Name is required.");
      return;
    }
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("profileImage", profileImage);

    console.log(formData);

    // try {
    //   const response = await axiosInstance.post("/auth/register", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   console.log("Registration successful:", response.data);
    //   navigate("/login");
    // } catch (err) {
    //   setError("Registration failed. Please try again.");
    //   console.error("Registration error:", err);
    // }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfileImage(e.target.files[0]);
    }
  };

  return (
    <div className="base">
      <NavBar />

      <div className="container p-6 bg-primary shadow rounded-lg border border-tertiary flex flex-col max-w-screen-sm gap-5">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold ">User Details</h2>
          {!editingMode ? (
            <button
              onClick={() => setEditingMode(!editingMode)}
              className="submit-button max-w-20 active:scale-90"
            >
              Edit
            </button>
          ) : (
            <button
              onClick={() => setEditingMode(!editingMode)}
              className="submit-button max-w-20 active:scale-90"
            >
              Cancel
            </button>
          )}
        </div>
        {editingMode ? (
          <>
            <div className="flex gap-10">
              <div className="flex flex-col max-h-36 bg-blue-400 items-center overflow-hidden rounded-full border-2 border-white">
                <img
                  src={
                    user ? getImageURL(user.profileImage) : profilePlaceHolder
                  }
                  alt="Profile"
                  className="w-36 h-36 object-cover"
                />
              </div>
              <div className="">
                <p className="text-lg font-bold">{user?.name || "John Doe"}</p>
                <p className="text-gray-400">
                  {user?.email || "john@example.com"}
                </p>
                {user?.isAdmin && <p className="text-gray-400">Admin User</p>}
              </div>
              <div>{editingMode}</div>
            </div>
          </>
        ) : (
          <form action="" onSubmit={handleSubmit}>
            <div className="flex gap-10">
              <div className="flex flex-col max-h-36 bg-blue-400 items-center overflow-hidden rounded-full border-2 border-white relative">
                <img
                  src={imageURL || profilePlaceHolder}
                  alt="Profile"
                  className="w-36 h-36 object-cover"
                />
                <input
                  id="profile-photo"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="profile-photo"
                  className="cursor-pointer absolute bg-black bg-opacity-50 w-full pb-2 text-center bottom-0"
                >
                  change
                </label>
              </div>

              <div className="flex flex-col w-80 gap-2">
                <div>
                  <label className="input-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value.trim())}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="input-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="text"
                    type="text"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    className="input-field"
                  />
                </div>

                {error && (
                  <div>
                    <p className="text-red-500 text-sm font-semibold text-center w-full">
                      {error}
                    </p>
                  </div>
                )}

                <div>
                  <button type="submit" className="submit-button mt-3">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
