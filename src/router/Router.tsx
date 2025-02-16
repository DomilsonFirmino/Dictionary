import {createBrowserRouter, RouterProvider } from "react-router"
import Search from "../components/pages/Search"
import Fav from "../components/pages/Fav"
import Home from "../components/pages/Home"
import ErrorPage from "../components/pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/Dictionary",
    element: < Home/>,
    children: [
      {path: "search",element: <Search/>},
      {path: "fav",element: <Fav/>}
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
