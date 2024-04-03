import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/header/Navbar'
import LoginForm from './pages/LoginForm';
import About from './pages/About';
import Tracking from './pages/Tracking';
import Services from './pages/Services';
import Support from './pages/Support';
import Home from './pages/Home';
import {createBrowserRouter, Router, RouterProvider,Outlet, BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/footer/Footer';
import Layout from './Components/footer/Layout';



function App() {

 /* const router=createBrowserRouter([
    {
      path:'/',
      element: <Layout/>
    },
    {
      path:'/home',
      element: <Navbar/>
    },
    {
      path:'/login',
      element: <LoginForm/>
    },
    {
      path:'/tracking',
      element: <Tracking/>
    },
    {
      path:'/services',
      element: <Services/>
    },
    {
      path:'/support',
      element: <Support/>
    },
    {
      path:'/about',
      element: <About/>
    }
  ]) */
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
 <div className="container ">

  <Routes>
  <Route exact path="/" element={<Layout><Home/></Layout>}/>
  <Route exact path="/tracking" element={<Layout><Tracking/></Layout>}/>
  <Route exact path="/services" element={<Layout><Services/></Layout>}/>
  <Route exact path="/support" element={<Layout><Support/></Layout>}/>
  <Route exact path="/about" element={<Layout><About/></Layout>}/>
  <Route exact path="/login" element={<LoginForm/>}/>
  </Routes>
 <Footer/>  
</div> 


 </BrowserRouter>
    </>
  );
  
 
}
export default App
