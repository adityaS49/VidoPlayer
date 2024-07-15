"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Feed from "../components/Feed";
import Login from "../components/Login";
import Register from "../components/Register";
import { Navbar } from "@/components";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [currentView, setCurrentView] = useState("register"); // Initial view is registration
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
      setCurrentView("feed"); // Directly go to feed if token exists
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView("feed");
    toast.success("Logged In Successfully");
  };

  const handleRegister = () => {
    setCurrentView("login"); // Switch to login after registration
    toast.success("User Registered Successfully");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setCurrentView("login");
    toast.info("Logged Out Successfully");
    console.log("Logout clicked");
  };

  return (
    <Box sx={{ backgroundColor: "#fff" }}>

      {currentView === "register" && (
        <Register setCurrentView={setCurrentView} onRegister={handleRegister} />
      )}
      {currentView === "login" && (
        <Login setCurrentView={setCurrentView} onLogin={handleLogin} />
      )}
      {currentView === "feed" && isLoggedIn && (
        <div>
          <Navbar onLogout={handleLogout} isLoggedIn={isLoggedIn} />
          <Feed />
        </div>
      )}
    </Box>
  );
};

export default Home;
