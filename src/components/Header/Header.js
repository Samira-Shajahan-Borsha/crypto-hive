import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='sticky top-0 flex justify-center md:justify-between px-12 py-8 bg-white'>
            <div className='hidden md:block'>
                <NavLink to='/' className='text-xl text-gray-600 font-sans font-bold'>Crypto Hive</NavLink>
            </div>
            <div className='font-sans flex text-xl gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/coins'>Coins</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default Header;