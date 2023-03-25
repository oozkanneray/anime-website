import { Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./components/Layout"
import Search from "./components/Search"
import Top from "./components/Top"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="top-anime" element={<Top/>} />
          <Route path="search" element={<Search/>} />
        </Route>
    </Routes>
  )
}

export default App
