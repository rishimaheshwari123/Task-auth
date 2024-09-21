import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../redux/authSlice";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showToast = (message, icon) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: "#f0f0f0",
      iconColor: icon === "success" ? "green" : "red",
    });
  };

  const handleLogout = () => {
    dispatch(setToken(null));
    localStorage.removeItem("token");
    showToast("Logout successfully", "success");
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p className="text-lg mb-2">Name: Rishi</p>
        <p className="text-lg mb-4">Email: rishimaheshwari040@gmail.com</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
