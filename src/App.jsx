import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DesignOne from "./pages/DesignOne";
import DesignTwo from "./pages/DesignTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DesignOne />,
  },
  {
    path: "/design-two",
    element: <DesignTwo />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
