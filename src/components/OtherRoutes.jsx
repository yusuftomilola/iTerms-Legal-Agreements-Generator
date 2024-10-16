import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../config/firebase";

const OtherRoutes = () => {


    return auth.currentUser ? <Outlet /> : <Navigate to={"/"}
}