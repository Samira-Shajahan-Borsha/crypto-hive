import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    const { id, name, image, symbol } = coin;
    return (
        <Link to={`/coin-details/${id}`}>
            <div className='flex justify-between bg-white w-[-250px] p-4 shadow-lg rounded-2xl'>
                <div className='flex-shrink-0'>
                    <img className='h-16 w-16 object-cover mx-auto rounded-full' src={image} alt="" />
                </div>
                <div>
                    <p>{name}</p>
                    <p><small className='text-gray-500 text-end'>{symbol}</small></p>
                </div>
            </div>
        </Link>
    );
};

export default CoinCard;