import React from 'react'
import Category from '../../components/DashBoardComponents/Category'
import Products from '../../components/DashBoardComponents/Products'

function Home() {
  return (
    <div>
      <h1 className='py-4 text-3xl font-semibold text-center'>Home Page</h1>
      <Category />
      <Products />
    </div>
  )
}

export default Home