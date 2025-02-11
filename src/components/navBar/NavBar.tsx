import React from 'react'

function NavBar() {
    return (
        <div className='flex flex-row items-center justify-between h-16 shadow-md px-4'>
            <span className='text-2xl font-bold text-gray-900'>KM</span>
            <div className='flex space-x-4'>
                <a href="" 
                className='text-gray-700 px-3 py-2 rounded-sm font-medium hover:text-gray-900 hover:bg-gray-200'>
                    About
                </a>
                <a href=""
                className='text-gray-700 px-3 py-2 rounded-sm font-medium hover:text-gray-900 hover:bg-gray-200'>
                    Work</a>
                <a href=""
                className='text-gray-700 px-3 py-2 rounded-sm font-medium hover:text-gray-900 hover:bg-gray-200'>
                    Education</a>
                <a href=""
                className='text-gray-700 px-3 py-2 rounded-sm font-medium hover:text-gray-900 hover:bg-gray-200'>
                    Projects</a>
                <a href=""
                className='text-gray-700 px-3 py-2 rounded-sm font-medium hover:text-gray-900 hover:bg-gray-200'>
                    Contact</a>
            </div>
        </div>
    )
}

export default NavBar