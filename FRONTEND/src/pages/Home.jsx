import React from 'react'


export default function Home() {
    return(
    <>
<div className='main relative w-screen h-full flex flex-col'>
<div className="home-img relative h-[470px] w-full">

    <img className="absolute inset-0 object-cover w-full h-full"
    src='homepage.jpg' alt="home-img"/>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.55)' }}></div>  
    <div className='p-24 z-10 relative'>
    <h1 className="maintext text-5xl text-yellow-500 font-bold font-serif">CLEAR WASTE</h1>
    <br/>
    <h2 className="subtext text-4xl text-green-600 font-serif font-bold">An initiative towards Swacch Bharat </h2>
    </div>
</div>
<div className='box  bottom-10 h-[300px] w-full '>
    example box
 </div>
</div> 

 
 </>  
    )
}