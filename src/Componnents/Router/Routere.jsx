import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
  },
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/",
    element: <div>Hello World</div>,
  },
{
  path: "*",
  element: <div>404 Not Found</div>,
}
])
export default router;
