import {useEffect} from "react";
import {isAuthenticated} from "../../utils/restricts";
import {useNavigate} from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [navigate]);

    console.log(isAuthenticated);

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;