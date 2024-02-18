import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route, Outlet,
  Link,
} from "react-router-dom";
import BannerDetails from "./components/bannerDetails/BannerDetails";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OverviewCounter from "./components/overview-counter/OverviewCounter";
import SimpleBanner from "./components/simpleBanner/SimpleBanner";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/home/Home";
import ErrorPage from "./components/errorPage/ErrorPage";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";


const Dashboard =()=>{
  return
  <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,   

  },
  {
    path: "/contact",
    element: <Contact/>,   

  },
  {
    path: "/about",
    element: <AboutUs/>,   

  },
  {
    path: "/hero",
    element: <Hero/>
  },
  {
    path: "/navbar",
    element: <Navbar/>
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])



function App() {

 

  return (
    <div className="dark:bg-slate-900 bg-white max-w-auto overflow-hidden">
    {/* <Navbar/> */}
      <RouterProvider router={router}/>
   
    </div>
  )
}

export default App
