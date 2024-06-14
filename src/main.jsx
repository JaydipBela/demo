import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, Route, RouterProvider, createBrowserRouter, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './componet/Home.jsx'
import Aboutus from './componet/About-us.jsx'
import Menu from './componet/Menu.jsx'
import Contactus from './componet/Contact-us.jsx'
import Blog from './componet/Blog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />}>

      <Route path="" element={<Home />} />
      <Route path="about" element={<Aboutus />} />
      <Route path="menu" element={<Menu />} />
      <Route path="contact" element={<Contactus />} />
      <Route path="blog" element={<Blog />} />

    </Route>

  )
)

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<Aboutus/>
//       },
//       {
//         path:"menu",
//         element:<Menu/>
//       },
//       {
//         path:"contact",
//         element:<Contactus/>
//       },
//       {
//         path:"blog",
//         element:<Blog/>
//       },
//     ]
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode >,
)


