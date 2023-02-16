import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='bg-gray-100 py-20 md:px-10 md:h-[80vh]'>
            <div className='flex flex-col items-center mb-14'>
                <h1 className='font-mono font-medium md:text-3xl '>Contact Us, Our Office Address Down Below</h1>
                <div className='my-6'>
                    <Link to='/contact/bd-address'>
                        <button className='bg-cyan-600 py-2 px-2 text-white mr-2'>BD Address</button>
                    </Link>
                    <Link to='/contact/us-address'>
                        <button className='bg-cyan-600 py-2 px-2 text-white'>US Address</button>
                    </Link>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Contact;