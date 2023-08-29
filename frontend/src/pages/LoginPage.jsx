import React from "react";
import { Form,Link } from "react-router-dom";
import classes from './css/loginCss.module.css';
import pic1 from "../images/loginImg.jpg";
const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 bg-gradient-to-r from-cyan-700 to-cyan-900 box-border ">
          <div>
          <img className={classes.wid} src={pic1} alt="" />
          </div>
  
        <div className="mt-4 border border-white-400 mx-8 mb-4 ">
          <div className="text-center py-3 text-2xl mt-32">
            <p>Log into your account</p>
          </div>
          <div className="grid justify-items-center mt-8">
            <Form method="post" className="w-full">
              <div className="mt-4 grid justify-center">
                <input
                  className="w-60 rounded-lg"
                  type="text"
                  name="email"
                  placeholder="  email"
                />
              </div>
              <div className="mt-4 grid justify-center">
                <input
                  className="w-60 rounded-lg"
                  type="text"
                  name="password"
                  placeholder="  password"
                />
              </div>
              <div className="mt-4 w-30 grid justify-center ">
                <button
                  className="bg-gray-400 hover:bg-white w-60 rounded-lg "
                  type="submit"
                >
                  Login
                </button>
              </div>
            </Form>
            <div className="mt-4">
              <h4>Don't have an account ? <Link to="/signup" className="underline underline-offset-1 text-zinc-200">Sign Up</Link></h4>
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
};
export default LoginPage;

