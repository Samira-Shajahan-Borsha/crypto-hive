import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className=''>
                <NavLink to='/'>Crypto Hive</NavLink>
            </div>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/coins'>Coins</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default Header;