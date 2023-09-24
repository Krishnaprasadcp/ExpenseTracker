import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootPage from "./pages/RootPages/RootPage";
import LoginPage,{action as loginAction} from "./pages/LoginPage";
import Signup,{action as signupAction} from "./pages/SignupPage";
import HomepageRoot from "./pages/RootPages/HomepageRoot";
import TestPage from "./pages/TestPage";
import ProtectedRoute from "./components/AuthChecker";
import MyProfile,{Loader} from "./pages/MyProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "user/login",
        element: <LoginPage />,
        action:loginAction
      },
      {
        path: "user/signup",
        element: <Signup />,
        action:signupAction
      },
      {
        path:"/user/testpage",
        element:<TestPage />
      },
      {
        path: "/user",
        element: <HomepageRoot />,
        children: [
          {
            path: "homepage",
            element: <ProtectedRoute element={HomePage} />,
          },
          { path: "userProfile", element:<ProtectedRoute element={MyProfile} />,loader:Loader },
        ],
      },
    ],
  },
]);
function App() {

  return <RouterProvider router={router} />;
}

export default App;
