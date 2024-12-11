import React from 'react'

import { IoIosStar } from "react-icons/io";
function ProductItem() {
    return (
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img alt="Black Male T-Shirt" class="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/ZJ9Kc8ENpOJ2A99pcmjP1wAz88qWYUQxU3XeSHvQoNajP28JA.jpg" width="300" />
            <div class="p-4">
                <h3 class="text-lg font-semibold">
                    Black Male T-Shirt
                </h3>
                <p class="text-red-500 text-xl font-bold">
                    $20.00
                </p>
                <div class="flex items-center mt-2">
                    <IoIosStar className='text-yellow-500' />
                    <IoIosStar className='text-yellow-500' />
                    <IoIosStar className='text-yellow-500' />
                    <IoIosStar className='text-yellow-500' />
                    <IoIosStar className='text-yellow-500' />
                </div>
                <div class="flex justify-between mt-4">
                    <button class="bg-green-500 text-white px-4 py-2 rounded">
                        Edit
                    </button>
                    <button class="bg-red-500 text-white px-4 py-2 rounded">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem