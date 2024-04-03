import React from 'react'
import { PiUserCircleLight } from "react-icons/pi";
import { BsMoon } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
return(
    <>
    <nav>
    <div className=" navbar h-16 bg-white flex items-center justify-evenly right-2 text-2xl sticky top-0">
            
                <div className='p-6'>
                    <img
                    className="logo h-[4rem] w-[4rem]"
                    src="cwlogo.jpg"/>
                </div>
            
            <div className='categories mr-[30px]'>
                <ul className="list-none relative flex " >  
                    <li className='float-left no-underline text-center px-6 py-3 font-serif'>
                    <NavLink className={(e)=>{return e.isActive? "text-[#007f18]": ""}} to="/" >Home</NavLink>  
                    </li>

                    <li className='float-left no-underline text-center px-6 py-3 font-serif '>
                    <NavLink  className={(e)=>{return e.isActive? "text-[#007f18]": ""}} to="/services">Services</NavLink> 
                    </li>

            
                    <li className='float-left no-underline text-center px-6 py-3 font-serif '>
                    <NavLink  className={(e)=>{return e.isActive? "text-[#007f18]": ""}} to="/tracking" >Tracking</NavLink>  
                    </li>

            
                    <li className='float-left no-underline text-center px-6 py-3 font-serif '>
                    <NavLink  className={(e)=>{return e.isActive? "text-[#007f18]": ""}} to="/about">About</NavLink>
                    </li>

            
                    <li className='float-left no-underline text-center px-6 py-3 font-serif '>
                    <NavLink  className={(e)=>{return e.isActive? "text-[#007f18]": ""}} to="/support" >Support</NavLink>
                    </li>
                </ul>
            </div>

        <div className="nav-search flex justify-evenly w-80 h-10 rounded-2xl bg-white border-solid border-black border-2">
            <input className="search-input w-full text-xl rounded-2xl bg-white"/>
            <div className="search-icon">
            <CiSearch className='mglass text-[35px]'/>
            </div>
        </div>
        <div className='icons flex justify-center items-center m-[10px]'>
        <div className="login p-[20px]">   
        <NavLink to="/login">
        <PiUserCircleLight className='user text-[42px]'/>   
        </NavLink>
        </div>
        
        <div className="darkmode p-[20px]">
        <BsMoon className='moon text-[30px] '/>
        </div>
        </div>
    </div>
    </nav>

       
        </>
)
}