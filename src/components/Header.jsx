import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FiShoppingCart } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const cart = useSelector((state) => state.cart)
  return (
    <header className='fixed top-0 w-full bg-stone-100 z-5 p-5'>
      <div className='container mx-auto px-5 flex items-center justify-between'>
        <Link to={"/"} className='text-[32px] pr-5 font-serif font-extrabold'>SHOP.CO</Link>
        <ul className='flex items-center gap-5 w-full justify-between'>
          <li>
            <NavLink className='text-[18px] font-medium text-gray-800' to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className='text-[18px] font-medium text-gray-800' to={"/filter"}>Filter</NavLink>
          </li>
          <li className=''>
            <NavLink className='text-[18px]  font-medium text-gray-800 flex items-end' to={"/cart"}><FiShoppingCart /> <span className='px-1 text-[12px] bg-black text-white rounded-4xl mb-2 '>{cart.length}</span></NavLink>
          </li>
          <div className="flex flex-1 border-1 border-gray-400 rounded-xl overflow-hidden max-w-2xl">
            <input
              className="flex-1 px-3 py-2 outline-none bg-white"
              placeholder="Search"
            />
            <button className="px-3 bg-white">
              <CiSearch />
            </button>
          </div>
        </ul>
      </div>

    </header>
  )
}

export default Header