import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import AddCoffee from "./Pages/AddCoffee/AddCoffee.jsx";
import ContextProvider from "./ContextProvider/ContextProvider.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import PrivateRoute from "./Routers/PrivateRoute.jsx";
import Details from "./Pages/Details/Details.jsx";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-coffee",
        element: (
          <PrivateRoute>
            <AddCoffee></AddCoffee>
          </PrivateRoute>
        ),
      },
      {
        path: "//update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-green-eight.vercel.app/coffees/${params.id}`),
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
