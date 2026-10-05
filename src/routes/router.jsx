import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/Home";
import Restaurant from "../pages/Restaurant/Restaurant";
import Search from "../pages/Search/Search";
import Cart from "../pages/Cart/Cart";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "restaurants/:restaurantId",
        element: <Restaurant />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;