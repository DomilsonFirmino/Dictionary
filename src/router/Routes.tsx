import { createBrowserRouter, RouterProvider } from "react-router"
import Search from "../components/pages/Search"
import Fav from "../components/pages/Fav"
import Home from "../components/pages/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: < Home/>,
    },{
        path: "/search",
        element: <Search/>
    },{
        path: "/fav",
        element: <Fav/>
    }
])
export default function Routes() {  
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
}
