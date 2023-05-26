import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Blog from "../pages/blog/Blog";
import AllToys from "../pages/allToys/AllToys";
import MyToy from "../pages/myToy/MyToy";
import AddToy from "../pages/addToy/AddToy";
import User from "../pages/user/User";
import Error from "../pages/error/Error";
import ToyDetails from "../pages/toyDetails/ToyDetails";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/blog", element: <Blog /> },
      { path: "/allToys", element: <AllToys /> },
      {
        path: "/myToy",
        element: (
          <ProtectedRoute>
            <MyToy />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addToy",
        element: (
          <ProtectedRoute>
            <AddToy />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        ),
      },
      {
        path: "/allToy/:_id",
        element: (
          <ProtectedRoute>
            <ToyDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
