import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { IRoute } from '../types/utils';

export const PrivateRoute: React.FC<IRoute> = ({
  component: Component,
  redirectTo,
}) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
