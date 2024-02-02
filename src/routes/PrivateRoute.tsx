import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
interface IRoute {
  component: React.ReactNode;
  redirectTo: string;
}

export const PrivateRoute: React.FC<IRoute> = ({
  component: Component,
  redirectTo,
}) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
