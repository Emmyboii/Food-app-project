import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose, AiOutlineSearch,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'

const Navbar = () => {

    const[nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/*Left side*/}
        <div className='flex items-center'>
            <div onClick={handleNav} className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Emmy <span className='font-bold'>Food</span>
            </h1>
            <div className='hidden lg:flex bg-gray-200 rounded-full p-1 items-center text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        {/*Search Input*/}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search Food' />
        </div>

        {/* Cart Button */}
        <button className='bg-black rounded-full text-white items-center hidden md:flex'>
            <BsFillCartFill size={20} className='mr-2'/>Cart
        </button>


        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? <div className='bg-black/80 w-full fixed h-screen z-10 top-0 left-0'></div> : ''}

        {/* side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={handleNav} size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>
                Emmy <span className='font-bold'>Food</span>
            </h2>
            <nav>
                <ul className='flex flex-col text-gray-800 p-4'>
                    <li className='flex text-xl py-4 items-center cursor-pointer'><TbTruckDelivery size={25} className='mr-4' />Order</li>
                    <li className='flex text-xl py-4 items-center cursor-pointer'><MdFavorite size={25} className='mr-4' />Favourite</li>
                    <li className='flex text-xl py-4 items-center cursor-pointer'><FaWallet size={25} className='mr-4' />Walllet</li>
                    <li className='flex text-xl py-4 items-center cursor-pointer'><MdHelp size={25} className='mr-4' />Help</li>
                    <li className='flex text-xl py-4 items-center cursor-pointer'><AiFillTag size={25} className='mr-4' />Promotions</li>
                    <li className='flex text-xl py-4 items-center cursor-pointer'><BsFillSaveFill size={25} className='mr-4' />Best Ones</li>
                    <li className='flex text-xl py-4 items-cente cursor-pointer'><FaUserFriends size={25} className='mr-4' />Invite Friends</li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Navbar