import useRole from "../hooks/useRole";
import Loader from '../components/Shared/Loader'
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const [role, isLoading] = useRole();

    if (isLoading) return <Loader />
    if (role === 'admin') return children
    return <Navigate to={'dashboard'} />
};

export default AdminRoute;