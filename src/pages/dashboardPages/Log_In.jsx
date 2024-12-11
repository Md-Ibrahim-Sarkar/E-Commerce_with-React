import React from 'react'

function Log_In() {
  return (
    <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-md">
    <h1 className="mb-6 text-2xl font-bold text-center">Log In</h1>
    <form>
        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                Username
            </label>
            <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
            />
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Password
            </label>
            <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
            />
        </div>
        <div className="flex items-center justify-center">
            <button
                className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                type="button"
            >
                Log In
            </button>
        </div>
    </form>
</div>
  )
}

export default Log_In