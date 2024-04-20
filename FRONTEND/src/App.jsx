import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/header/Navbar'
import LoginForm from './pages/LoginForm';
import About from './pages/About';
import Tracking from './pages/Tracking';
import Services from './pages/Services';
import Support from './pages/Support';
import Home from './pages/Home';
import {createBrowserRouter, Router, RouterProvider,Outlet, BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Footer from './Components/footer/Footer';
import Layout from './Components/footer/Layout';



function App() {
   
  return (
   
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    );
  }
    {/* <>  */}
    function AppContent() {
    /* const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false); */
  //useEffect(() => {
    // Check if the current route is the homepage
    //setIsHomePage(location.pathname === '/');
  //}, [location]);
   /*  <BrowserRouter> */
   {/* <Navbar/> */}
   const location = useLocation();
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSectionHeight = document.querySelector('.navbar').offsetHeight;

      if (scrollPosition < heroSectionHeight) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   return (
    <>
  <Navbar isTransparent=/* {isHomePage} */ {isTransparent && location.pathname === '/'} />
    
 <div className="container ">

  <Routes>
  <Route exact path="/" element={<Layout><Home/></Layout>}/>
  <Route exact path="/tracking" element={<Layout><Tracking/></Layout>}/>
  <Route exact path="/services" element={<Layout><Services/></Layout>}/>
  <Route exact path="/about" element={<Layout><About/></Layout>}/>
  <Route exact path="/support" element={<Layout><Support/></Layout>}/>
 
  <Route exact path="/login" element={<LoginForm/>}/>
  </Routes>
  
</div> 

<Footer></Footer>
{/*  </BrowserRouter> */}
 
    </>
  );
  
 
}
export default App
