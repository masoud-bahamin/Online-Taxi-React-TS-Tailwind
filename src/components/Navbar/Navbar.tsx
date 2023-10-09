import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='absolute bottom-0 mx-auto w-full sm:w-[315px] bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 rounded-t-3xl z-[9999] px-8'>
            <ul className=' flex justify-around'>
                <Link to={"/"}>
                    <li className=' cursor-pointer px-2 py-3 text-center text-gray-500 dark:text-gray-200 dark:fill-gray-200 fill-gray-500 hover:text-yellow-500 hover:fill-yellow-500 active:text-yellow-500 active:fill-yellow-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" className=' fill-inherit mx-auto mb-1' width="16" height="16" viewBox="0 0 24 24" ><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
                        <p className='text-xs'>Home</p>
                    </li>
                </Link>
                <Link to={"/fav"}>
                    <li className=' cursor-pointer px-2 py-3 text-center text-gray-500 dark:text-gray-200 dark:fill-gray-200 fill-gray-500 hover:text-yellow-500 hover:fill-yellow-500 active:text-yellow-500 active:fill-yellow-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-inherit mx-auto mb-1' width="16" height="16" viewBox="0 0 24 24" ><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>                    <p className='text-xs'>Favourite</p>
                    </li>
                </Link>
                <Link to={"/wallet"}>
                    <li className=' cursor-pointer  relative p-3 text-center text-gray-500 dark:text-gray-200 dark:fill-gray-200 fill-gray-500 hover:text-yellow-500 pt-8 hover:fill-yellow-500 active:text-yellow-500 active:fill-yellow-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" className=' bg-yellow-400 absolute rounded-full -top-6 left-0 w-12 h-12 p-3 fill-white  mx-auto mb-1' width="16" height="16" viewBox="0 0 24 24" ><path d="M16 12h2v4h-2z"></path><path d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path></svg>                    <p className='text-xs'>Wallet</p>
                    </li>
                </Link>
                <Link to={"/login"}>
                    <li className=' cursor-pointer px-2 py-3 text-center text-gray-500 dark:text-gray-200 dark:fill-gray-200 fill-gray-500 hover:text-yellow-500 hover:fill-yellow-500 active:text-yellow-500 active:fill-yellow-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-inherit mx-auto mb-1' width="16" height="16" viewBox="0 0 24 24" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m13 6-6 7h4v5l6-7h-4z"></path></svg>                    <p className='text-xs'>Offer</p>
                    </li>
                </Link>
                <Link to={"/profile"}>
                    <li className=' cursor-pointer px-2 py-3 text-center text-gray-500 dark:text-gray-200 dark:fill-gray-200 fill-gray-500 hover:text-yellow-500 hover:fill-yellow-500 active:text-yellow-500 active:fill-yellow-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-inherit mx-auto mb-1' width="16" height="16" viewBox="0 0 24 24" ><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>                    <p className='text-xs'>Profile</p>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar