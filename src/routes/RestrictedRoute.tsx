import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}: {
  component: any;
  redirectTo: string;
}) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
