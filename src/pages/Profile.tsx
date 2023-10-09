import React from 'react'
import Header from '../components/Header/Header'

function Profile() {
    return (
        <>
            <Header subHeader={true} />
            <div className='pt-16 mx-3'>
                <h3 className='mb-3 font-semibold text-center text-sm'>Edit Profile</h3>
                <div className='my-4'>
                    <img className='mx-auto rounded-full border border-yellow-500' width={60} src="https://static.vecteezy.com/system/resources/thumbnails/015/409/989/small/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg" alt="" />
                </div>
                <p className='text-sm font-semibold text-center mb-4'>Masoud Bahamin</p>
                <form>
                    <div className="container mx-auto my-4 text-white">
                        <input type='text' id="name" className='mb-3 rounded w-full p-3 dark:bg-gray-800 dark:text-gray-200 border text-slate-800 border-yellow-400 text-xs' placeholder='Name' />
                        <input type='email' id="email" className='mb-3 rounded w-full p-3 dark:bg-gray-800 dark:text-gray-200 border text-slate-800 border-yellow-400 text-xs' placeholder='Email' />
                        <input type={'password'} id="password" className='mb-3 rounded w-full p-3 dark:bg-gray-800 dark:text-gray-200 border text-slate-800 border-yellow-400 text-xs' placeholder='Enter Your Password' />
                        <input type='number' id="phone" className='mb-3 rounded w-full p-3 dark:bg-gray-800 dark:text-gray-200 border text-slate-800 border-yellow-400 text-xs' placeholder='Phone Number' />
                        <button
                            type='submit'
                            className={` bg-yellow-400 text-white w-full p-3 text-xs mb-6 rounded`}>Sign In</button>
                        
                    </div>
                </form>

            </div>
        </>
    )
}

export default Profile