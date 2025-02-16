import {BrowserRouter, Route, Routes } from "react-router"
import Search from "../components/pages/Search"
import Fav from "../components/pages/Fav"
import Home from "../components/pages/Home"
import ErrorPage from "../components/pages/ErrorPage"

export default function Router() {  
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/Dictionary">
          <Route index element={<Home />}/>
          <Route path="Search" element={<Search />}/>
          <Route path="Fav" element={<Fav />}/>
        </Route>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}
