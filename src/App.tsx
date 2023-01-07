import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Admin from "./pages/Admin"
import Cart from "./pages/Cart"
import Root from "./pages/Root"
import Item from "./pages/Item"
import Login from "./pages/Login"
import Products from "./pages/Products"
import Profile from "./pages/Profile"
import BrowseCategories from "./pages/BrowseCategories"
import CategoryProducts from "./pages/CategoryProducts"
import Home from "./pages/Home"


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <Item />,
        },
        {
          path: "categories",
          element: <BrowseCategories />
        },
        {
          path: "categories/:id/products",
          element: <CategoryProducts />

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