import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Admin from "./pages/Admin"
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
    <div>
      <RouterProvider router={router} />
      <Header router={router} />
    </div>
  )
}

export default App