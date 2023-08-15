import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface PrivateRouteProps {
  children: React.ReactNode;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.user);
  const location = useLocation();

  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
