import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imagePlaceholder from "../assets/images/profile-image-placeholder.jpg";
import axiosInstance from "../utils/axios";
import { useSelector } from "react-redux";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const user = useSelector((state: any) => state.auth.user);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!profilePhoto) {
      setError("Profile photo is required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profileImage", profilePhoto);

    try {
      const response = await axiosInstance.post("/auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error("Registration error:", err);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfilePhoto(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-white px-6 py-6 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center mb-5">Register</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
              className="w-full p-2 border border-gray-300 rounded"
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
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="input-label" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="input-label" htmlFor="profile-photo">
              Profile Photo
            </label>
            <div className="w-24 h-24 border border-gray-300 rounded-full overflow-hidden mb-2">
              {profilePhoto ? (
                <img
                  src={URL.createObjectURL(profilePhoto)}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={imagePlaceholder} // Default image
                  alt="Default"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <input
              id="profile-photo"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="profile-photo"
              className="cursor-pointer bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              {profilePhoto ? "Change Image" : "Upload Image"}
            </label>
          </div>

          {error ? (
            <p className="text-red-500 text-sm font-semibold text-center w-full">
              {error}
            </p>
          ) : (
            <p className="text-blue-500 text-sm text-center w-full">
              Password must be at least 6 characters long.
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-5 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline text-base">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
