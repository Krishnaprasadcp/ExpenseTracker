import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { userLoginAction } from "../store/userSlice";
function MainNavigation(){
  const dispatch = useDispatch();
  const logoutButtonHandler =()=>{
    Cookies.remove('jwt');
    alert("Logout successfully !");
    dispatch(userLoginAction.isLoggedin());
  }
    return(
        <Fragment>
            <nav className="text-xl lg:text-2xl">
            <ul className="flex flex-row justify-between mx-2 ">
              <li>
              <NavLink to="/user/homepage" className={({isActive})=>isActive ? "active": undefined} end>Home</NavLink>
              </li>
              <li>
              <NavLink to="/user/test" className={({isActive})=>isActive ? "active" :undefined} end>Expenses</NavLink>
              </li>
              <li>
              <NavLink to="/user/test" className={({isActive})=>isActive ? "active" :undefined}end>Income</NavLink>
              </li>
              <li>
              <NavLink  to="/user/test"className={({isActive})=>isActive ? "active" :undefined}end>Add Expense</NavLink>
              </li>
              <li>
              <NavLink to="/user/userProfile" className={({isActive})=>isActive ? "active" :undefined}end>My Profile</NavLink>
              </li>
              <li>
              <NavLink to="/user/login" onClick={logoutButtonHandler} className={({isActive})=>isActive ? "active" :undefined}end>Signout</NavLink>
              </li>
            </ul>
          </nav>
        </Fragment>
    )
}
export default MainNavigation;