import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { hasAccess } from "../utils/shared";

const intialUserValue = {
  email: "",
  firstName: "",
  id: 0,
  lastName: "",
  password: "",
  role: "",
  roleId: 0,
};

const initialState = {
  setUser: () => {},
  user: intialUserValue,
  signOut: () => {},
};

export const AuthContext = createContext(initialState);

export const AuthWrapper = ({ children }) => {
  const [user, _setUser] = useState(intialUserValue);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const str = JSON.parse(localStorage.getItem("user")) || intialUserValue;
    if (str.id) {
      _setUser(str);
      navigate("/bookList")
    }
    if (!str.id) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (pathname === "/login" && user.id) {
      navigate("/bookList");
    }
    if (!user.id) {
      return;
    }
    const access = hasAccess(pathname, user);
     if(!access) {
      toast.warning("sorry, you are not authorized to access this page",{
        position: "top-left",
      });
      navigate("/bookList");
      return;
    }
  }, [user, pathname]);

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    _setUser(user);
  };

  const signOut = () => {
    setUser(intialUserValue);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const value = {
    user,
    setUser,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
