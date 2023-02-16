import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='flex flex-col bg-gray-100 h-[80vh] justify-center items-center '>
            <h1 className='font-mono font-medium md:text-5xl text-2xl mb-3 sm:px-4'>Welcome to CRYPTO Hive</h1>
            <Link to='/coins'>
                <button className='bg-cyan-600 font-normal rounded-full  py-2 px-3 text-white'>Explore coins</button>
            </Link>
        </div>
    );
};

export default HomePage;