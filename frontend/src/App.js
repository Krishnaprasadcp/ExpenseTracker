import {
  RouterProvider,
  createBrowserRouter,
  json,
  redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootPage from "./pages/RootPage";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import { userExpenseActions } from "./store/user-expenseSlice";

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
            });
            const returnedData = await response.json();
            console.log(returnedData.user);
            if (!response.ok) {
              throw json(
                { message: "Cant upload data to the database" },
                { status: 500 }
              );
            } else {
              dispatch(userExpenseActions.userData(returnedData.user));

              return redirect("/user/homepage");
            }
          },
        },
        { path: "user/:name", element: <HomePage /> },
        { path: "signup", element: <Signup /> },
        { path: "/user/homepage", element: <HomePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
