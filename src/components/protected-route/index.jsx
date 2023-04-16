import { Navigate } from "react-router-dom";
import getCookie from "../../utils/getCookie";

export const ProtectedRoute = (props) => {
    const authSuccess =  getCookie('tokenAccess');
    const isAuth = !!authSuccess;    

    return isAuth === !!props.protected ? props.children : <Navigate to={props.redirectPath}/> 
}