import React from 'react'

function Create_Product() {
  return (
    <div className="w-full max-w-md p-8 mx-auto mt-8 bg-white rounded-lg shadow-md">
    <h1 className="mb-6 text-2xl font-bold text-center">Create new Product</h1>
    <form>
        <div className="mb-4">
            <label className="block mb-2 text-gray-700">Product Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
            <label className="block mb-2 text-gray-700">Product Price</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
            <label className="block mb-2 text-gray-700">Product Rating</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-gray-700">Product Image</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="text-center">
            <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">Create new Product</button>
        </div>
    </form>
</div>
  )
}

export default Create_Product