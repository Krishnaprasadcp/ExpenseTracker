import {
  RouterProvider,
  createBrowserRouter,
  json,
  redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootPage from "./pages/RootPages/RootPage";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import { userLoginAction } from "./store/userSlice";
import HomepageRoot from "./pages/RootPages/HomepageRoot";
// import TestPage from "./pages/TestPage";
import ProtectedRoute from "./components/AuthChecker";
import MyProfile from "./pages/MyProfile";
function App() {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "user/login",
          element: <LoginPage />,
          action: async ({ request }) => {
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
              credentials:'include'
            });
            const returnedData = await response.json();
            if (!response.ok) {
              throw json(
                { message: "Cant upload data to the database" },
                { status: 500 }
              );
            } else {
              dispatch(userLoginAction.userData(returnedData.user));
              dispatch(userLoginAction.isLoggedin());
              dispatch(userLoginAction.tokenData(returnedData.token));
              return redirect("/user/homepage");
            }
          },
        },
        // { path: "user/:name", element: <HomePage /> },
        { path: "signup", element: <Signup /> },
        {
          path: "/user",
          element: <HomepageRoot />,
          children: [
            {path:"homepage",element:<ProtectedRoute element={HomePage}/> },
            {path:"userProfile",element:<MyProfile />}
            
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
