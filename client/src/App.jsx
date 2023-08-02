import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import './style.scss'
const Layout = ()=>{
  return(

    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element:
    <Layout/>,
    children:[
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/post/:id',
      element: <Single/>
    },
    {
      path:'/write',
      element: <Write/>
    }

    ]
    
  },
  {
    path: "/register",
    element: <Register/>
  }, {
    path: "/login",
    element: <Login/>
  }, {
    path: "/home",
    element: <Home/>
  }, {
    path: "/single",
    element: <Single/>
  },
  {
    path: "/write",
    element: <Write/>
  },
])

function App() {
  return (<div className="app">
    <div className="container">
    <RouterProvider router = {router}/>

    </div>
  </div>
  );
}

export default App;