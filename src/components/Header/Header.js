import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='sticky top-0 flex justify-center md:justify-between px-12 py-8 bg-white'>
            <div className='hidden md:block text-xl text-gray-600 font-sans font-bold'>
                <NavLink to='/'>Crypto Hive</NavLink>
            </div>
            <div className='font-sans flex text-xl gap-4'>
                <NavLink className={({ isActive }) => isActive ? 'text-cyan-600' : undefined} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-cyan-600' : undefined} to='/coins'>Coins</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-cyan-600' : undefined} to='/contact'>Contact</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-cyan-600' : undefined} to='/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default Header;