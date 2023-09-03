import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const RootPage = () => {
  const showName = useSelector(state=>state.userLoginData.isLoggedin);
  const userInfo = useSelector((state) => state.userLoginData.userData);
  const [date, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <React.Fragment>
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-900 box-border">
        <div className="text-3xl text-center py-2 border-b">
          <h3>Expense Tracker</h3>
          <div className="text-xl flex flex-row justify-between ">
            <div className="text-zinc-200">
              {!showName && <Link className="mx-3" to="user/login">SignIn</Link>}
              {!showName && <Link to="signup">SignUp</Link>}
              {showName && <h5>Welcome:{userInfo.firstName}{userInfo.lastName}</h5> }
            </div>
            <div className="text-xl  mr-6 text-zinc-200">
            <h4 className="inline">Time: </h4>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
              <div className="-mr-2">
                <h4 className="inline">Date: </h4>{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};
export default RootPage;
