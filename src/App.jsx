import { Route,Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Layout from "./components/pages/Layout"
import Search from "./components/pages/Search"
import Top from "./components/pages/Top"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="top-anime" element={<Top/>} />
          <Route path="search" element={<Search/>} />
        </Route>
    </Routes>
  )
}

export default App
