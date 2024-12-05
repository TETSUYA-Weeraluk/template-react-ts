import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import SecondLayout from "../layouts/SecondLayout";
import { route_home } from "./home/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: route_home,
  },
  {
    path: "/",
    element: <SecondLayout />,
    children: [
      {
        path: "second",
        element: <p>Second</p>,
      },
    ],
  },
]);

export default router;
