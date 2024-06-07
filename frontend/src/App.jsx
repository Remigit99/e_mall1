import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
