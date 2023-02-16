import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col md:flex-row bg-gray-100 px-6 md:px-36 md:py-32 py-10'>
            <div className='md:w-6/12'>
                <p><small className='text-xs text-gray-500 sm:w-78'>ERROR 404</small></p>
                <h1 className='text-4xl font-extrabold text-gray-900 my-2'>Oops! The page you're looking for isn't here.</h1>
                <p className='text-xl text-gray-700'>You might have the wrong address, or the page may have moved.</p>
                <div className='my-6'>
                    <Link to='/'>
                        <button className='bg-cyan-600 py-2 px-2 text-white mr-2'>Back to homePage</button>
                    </Link>
                    <Link to='/contact'>
                        <button className='bg-cyan-600 py-2 px-2 text-white'>Contact Us</button>
                    </Link>
                </div>
            </div>
            <div className='md:w-6/12 md:px-14 mt-4'>
                <img className='' src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg" alt="error-img" />
            </div>
        </div>
    );
};

export default NotFound;