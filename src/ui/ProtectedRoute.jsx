import { useNavigate } from "react-router-dom";
import useAuthorized from "../features/authentication/useAuthorized";
import Loading from "./Loading";
import { useEffect } from "react";


function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    const { isAuthenticated, isLoading, isAuthorized } = useAuthorized();


    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/auth");
        if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });

    }, [isAuthorized, isAuthenticated, isLoading, navigate]);

    if (isLoading) return <div className=" flex items-center justify-center bg-secondary-100 h-screen">
        <Loading />
    </div>

    if (isAuthenticated && isAuthorized) return children;


}

export default ProtectedRoute