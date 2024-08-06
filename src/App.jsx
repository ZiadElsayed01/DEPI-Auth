import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import GetUser from "./Components/GetUser/GetUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/user-details",
    element: <GetUser />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
