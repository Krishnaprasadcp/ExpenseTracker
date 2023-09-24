import React from "react";
import { Form, Link, redirect, json } from "react-router-dom";
import classes from "./css/loginCss.module.css";
import pic1 from "../images/loginImg.jpg";
import store from "../store";
import { userLoginAction } from "../store/userSlice";
const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 bg-gradient-to-r from-cyan-700 to-cyan-900 box-border ">
        <div>
          <img className={classes.wid} src={pic1} alt="" />
        </div>

        <div className="allforms flex justify-center mt-4 border border-white-400 mx-8 mb-4 ">
          <div className="box ">
            <div className="hii flex-col">
              <div className="text-center py-3 text-2xl mt-32  ">
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
                  <h4>
                    Don't have an account ?{" "}
                    <Link
                      to="/user/signup"
                      className="underline underline-offset-1 text-zinc-200"
                    >
                      Sign Up
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LoginPage;

export async function action({ request }) {
  const method = request.method;
  const data = await request.formData();
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const url = "http://localhost:3000/user/login";
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
    credentials: "include",
  });
  const returnedData = await response.json();
  if (!response.ok) {
    throw json(
      { message: "Cant upload data to the database" },
      { status: 500 }
    );
  } else {
    store.dispatch(userLoginAction.userData(returnedData.user));
    store.dispatch(userLoginAction.isLoggedin());
    store.dispatch(userLoginAction.tokenData(returnedData.token));
    return redirect("/user/homepage");
  }
}
