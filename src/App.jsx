import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './componet/Home'
import Menu from './componet/Menu'
import Blog from './componet/Blog'
import Aboutus from './componet/About-us'
import Contactus from './componet/Contact-us'
import { Outlet } from 'react-router-dom'
import Navbar from './componet/Navbar'
import Footer from './componet/Footer'


function App() {
  const [count, setCount] = useState(0);
 

  return (
    <>
    <Navbar/>
    <Outlet/>
     {/* <Home></Home>
     <Aboutus></Aboutus>
     <Menu></Menu>
     <Contactus></Contactus>
     <Blog></Blog> */}
     <Footer/>
    </>
  )
}

export default App
