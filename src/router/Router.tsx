import { createBrowserRouter, RouterProvider } from "react-router"
import Search from "../components/pages/Search"
import Fav from "../components/pages/Fav"
import Home from "../components/pages/Home"
import ErrorPage from "../components/pages/ErrorPage"

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/Dictionary/",
        element: < Home/>
      },{
        path: "/Dictionary/search",
        element: <Search/>
      },{
        path: "/Dictionary/fav",
        element: <Fav/>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])
export default function Router() {  
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
}
