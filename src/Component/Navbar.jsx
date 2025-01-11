import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdMenu } from "react-icons/md";


const Navbar = () => {
  const[x, Setx]= useState(false)
  return (
    <div className='flex justify-between items-center gap-5 bg-green-600 h-[50px] relative p-3'>
      <h1 className='font-bold text-white text-xl'>React Practice</h1>
      <ul className='md:flex hidden gap-6'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/About'}>About</Link></li>
        <li><Link to={'/Expense'}>Expense</Link></li>
        <li><Link to={'/Todo List'}>Todo</Link></li>
      </ul>
      { x && <ul className='md:hidden block absolute bg-blue-600 left-0 w-full top-[100%]'>
         <li className='text-center px-4 py-2 border-b-2'><Link to={'/'}>Home</Link></li>
         <li className='text-center px-4 py-2 border-b-2'><Link to={'/About'}>About</Link></li>
         <li className='text-center px-4 py-2 border-b-2'><Link to={'/Expense'}>Expense</Link></li>
         <li className='text-center px-4 py-2 border-b-2'><Link to={'/Todo List'}>Todo</Link></li>
       </ul>
      }
      <MdMenu onClick={()=>Setx(!x)} size={25} className='md:hidden block'/>
    </div>
  )
}

export default Navbar
