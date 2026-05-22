import { useAuthStore } from '../../features/auth/store/auth.store';
import { Navigate, useLocation } from 'react-router-dom';


interface RequireAuthProps {
  children: React.ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const accessToken = useAuthStore(state => state.accessToken);
  const location = useLocation(); 

  if (!accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
