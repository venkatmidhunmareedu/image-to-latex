import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 border-t-2 border-slate-700 md:border-none">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Image To LaTex</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="/" className="hover:underline me-4 md:me-6">Home</a>
                            </li>
                            <li>
                                <a href="/history" className="hover:underline me-4 md:me-6">History</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://midhunmareedu.vercel.app/" className="hover:underline">Midhun Mareedu™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
}

export default Footer