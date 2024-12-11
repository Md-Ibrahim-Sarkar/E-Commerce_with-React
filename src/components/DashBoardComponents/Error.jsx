import React from 'react'
import { useNavigate } from 'react-router'

function Error() {
  const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                
                <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
                <p className="mb-8 text-2xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
                <button onClick={()=> navigate(-1)} className="px-6 py-3 text-lg text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700">
                    <i className="mr-2 fas fa-home"></i> Go Back
                </button>
            </div>
        </div>
    )
}

export default Error