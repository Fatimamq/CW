import React,{useEffect, useState} from 'react'
import { PiUserCircleLight } from "react-icons/pi";
import { BsMoon } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';



    const Navbar = ({isTransparent}) => {
        const [navbarStyle, setNavbarStyle] = useState({
        backgroundColor: 'transparent',
        textColor: 'text-white',
        boxShadow: 'none',
        border: 'border-white'});
      
        useEffect(() => {
          const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const heroSectionHeight = document.querySelector('.navbar').offsetHeight;
      
            if (scrollPosition < heroSectionHeight) {
              // If scroll position is within the height of the hero section, set background to transparent
              setNavbarStyle({
                backgroundColor: 'transparent',
                textColor: 'text-white',
                boxShadow: 'none',
                border: 'border-white'
              });
            } else {
              // If scroll position is below the hero section, set background to white
              setNavbarStyle({
                backgroundColor: 'white',
                textColor: 'text-black',
                boxShadow: 'shadow-lg',
                border: 'border-black'
              });
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
return(
    <>
    <nav style={{ backgroundColor: navbarStyle.backgroundColor}} className=
    /* "navbar h-16 w-full bg-white flex items-center justify-evenly right-2 text-[18px] fixed left-0 top-0 z-50 shadow-lg "> */
    {`navbar h-16 w-full flex items-center justify-evenly text-[20px] fixed  left-0 top-0 z-50  ${isTransparent ? 'shadow-none' : 'shadow-lg'}`}>
                <div className='p-6'>
                    <img
                    className="logo h-[4rem] w-[4rem]"
                    src="cwlogo1.png"/>
                </div>
            
            <div className='categories mr-[30px]'>
                <ul className={`list-none relative flex font-[Raleway] font-[500] ${isTransparent ? 'text-white' : 'text-black'}`} >  
                    <li className='float-left no-underline text-center px-6 py-3'>
                    <NavLink className={(e)=>{return e.isActive? "text-[#007f18]": ""}} to="/" >Home</NavLink>  
                    </li>

                    <li className='float-left no-underline text-center px-6 py-3 '>
                    <NavLink  className={(e)=>{return e.isActive? "text-[#007f18]": ""}} to="/services">Services</NavLink> 
                    </li>

            
                    <li className='float-left no-underline text-center px-6 py-3  '>
                    <NavLink  className={(e)=>{return e.isActive? "text-[#007f18]": ""}} to="/tracking" >Tracking</NavLink>  
                    </li>

            
                    <li className='float-left no-underline text-center px-6 py-3  '>
                    <NavLink  className={(e)=>{return e.isActive? "text-[#007f18]": ""}} to="/about">About</NavLink>
                    </li>

            
                    <li className='float-left no-underline text-center px-6 py-3 '>
                    <NavLink  className={(e)=>{return e.isActive? "text-[#007f18]": ""}} to="/support" >Support</NavLink>
                    </li>
                </ul>
            </div>

        <div className={`nav-search flex justify-evenly w-80 h-10 rounded-2xl bg-white border-solid   ${isTransparent ? 'border-none' : 'border-black'} border-2`}>

            <input className="search-input w-[80%] text-xl font-[Raleway] rounded-xl bg-white border-none focus:outline-none " placeholder='Search...'/>
            <div className="search-icon">
            <CiSearch className='mglass text-[35px]'/>
            </div>
        </div>
        <div className={`icons flex justify-center items-center m-[10px] ${isTransparent ? 'text-white' : 'text-black'}`}>
        <div className="login p-[20px]">   
        <NavLink to="/login">
        <PiUserCircleLight className='user text-[42px]'/>   
        </NavLink>
        </div>
        
        <div className="darkmode p-[20px]">
        <BsMoon className='moon text-[30px] '/>
        </div>
        </div>
    
    </nav>
     </>
)
}

export default Navbar;