import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Admin from "./pages/Admin"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Item from "./pages/Item"
import Login from "./pages/Login"
import Products from "./pages/Products"
import Profile from "./pages/Profile"


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <Item />,
        },
        {
          path: "cart",
          element: <Cart />

        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "admin",
          element: <Admin />
        }
      ]
    }
  ])
  

  return (
    <RouterProvider router={router} />
  )
}

export default App