/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner text-success "></span>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login"> </Navigate>
};

export default PrivetRoute;