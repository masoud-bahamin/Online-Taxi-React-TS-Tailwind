import React from 'react'
import Header from '../components/Header/Header'

function Wallet() {
    return (
        <>
            <Header subHeader={true} />
            <div className='pt-16 mx-3'>
                <h3 className='mb-3 font-semibold text-center text-sm'>Wallet</h3>
                <div className='flex justify-end'>
                    <button className={` text-yellow-400 border border-yellow-400 px-6  py-3 text-xs mb-6 rounded`}>Add money</button>
                </div>
                <div className='flex gap-3 mb-4'>
                    <div className='bg-yellow-100 dark:bg-gray-900 rounded cursor-pointer flex items-center justify-center w-1/2 text-center h-32 border border-yellow-400'>
                        <div>
                            <p className='mb-2 font-semibold'>$500</p>
                            <p className='text-xs'>Available Balance</p>
                        </div>
                    </div>
                    <div className='bg-yellow-100 dark:bg-gray-900 rounded cursor-pointer flex items-center justify-center w-1/2 text-center h-32 border border-yellow-400'>
                        <div>
                            <p className='mb-2 font-semibold'>$200</p>
                            <p className='text-xs'>Total Expend</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <p className='font-semibold text-sm'>Transections</p>
                    <p className='text-yellow-400 text-xs'>See All</p>
                </div>
                <div className='border rounded border-yellow-400 p-3 flex items-center mb-3 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 mr-2 bg-rose-300 p-2 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>
                    <div>
                        <p className=' text-xs font-semibold'>Welton</p>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>Today at 09:45 am</p>
                    </div>
                    <p className='ml-auto text-xs font-semibold'>-$280.00</p>
                </div>
                <div className='border rounded border-yellow-400 p-3 flex items-center mb-3 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 mr-2 bg-green-300 p-2 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                    </svg>

                    <div>
                        <p className=' text-xs font-semibold'>Nilson</p>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>Today at 11:05 am</p>
                    </div>
                    <p className='ml-auto text-xs font-semibold'>-$30.00</p>
                </div>
                <div className='border rounded border-yellow-400 p-3 flex items-center mb-3 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 mr-2 bg-rose-300 p-2 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>
                    <div>
                        <p className=' text-xs font-semibold'>Nathsam</p>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>Today at 04:11 pm</p>
                    </div>
                    <p className='ml-auto text-xs font-semibold'>$112.50</p>
                </div>
            </div>
        </>
    )
}

export default Wallet