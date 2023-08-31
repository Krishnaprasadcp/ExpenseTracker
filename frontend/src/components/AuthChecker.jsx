import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
const ProtectedRoute=({element:Element})=>{
   
    const cookieValue = Cookies.get('jwt');
    const token = useSelector((state)=>state.userLoginData.token);
    console.log(cookieValue);
    const isAuthenticated=()=>{
        if(token === cookieValue){
            return true
        }
    }
    return isAuthenticated()?(
        <Element /> 
    ):(
        <Navigate to="/user/login" />
    )

}
export default ProtectedRoute;