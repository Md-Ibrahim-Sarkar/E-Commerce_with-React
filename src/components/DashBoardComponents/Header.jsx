import React, { useState } from 'react'
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from 'react-router';
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
      <div className='border-b'>
           <div className="container p-4 mx-auto">
                    <div className="flex items-center justify-between">
                        <Link to={'/'} className="px-4 py-2 text-white bg-green-500 rounded">Home</Link>
                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                            <RiMenu4Fill />
                            </button>
                        </div>
                        <div className="hidden space-x-4 md:flex">
                            <Link to={'/create-product'} className="px-4 py-2 text-white bg-green-500 rounded">Create new Product</Link>
                            <Link to={'/create-category'} className="px-4 py-2 text-white bg-green-500 rounded">Create new Category</Link>
                        </div>
                    </div>
                    {menuOpen && (
                        <div className="flex flex-col mt-4 space-y-2 md:hidden">
                            <Link to={'/create-product'} className="px-4 py-2 text-white bg-green-500 rounded">Create new Product</Link>
                            <Link to={'/create-category'} className="px-4 py-2 text-white bg-green-500 rounded">Create new Category</Link>
                        </div>
                    )}
                </div>
      </div>

  )
}

export default Header