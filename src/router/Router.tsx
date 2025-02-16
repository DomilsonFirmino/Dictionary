import {BrowserRouter, Route, Routes } from "react-router"
import Search from "../components/pages/Search"
import Favs from "../components/pages/Favs"
import Home from "../components/pages/Home"
import ErrorPage from "../components/pages/ErrorPage"
import Fav from "../components/pages/Fav"

export default function Router() {  
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/Dictionary">
          <Route index element={<Home />}/>
          <Route path="Search" element={<Search />}/>
          <Route path="Favs">
            <Route index element={<Favs />}/>
            <Route path=":pid" element={<Fav />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}
