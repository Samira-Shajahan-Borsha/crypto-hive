import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const coins = useLoaderData();
    console.log(coins)
    return (
        <div className='flex flex-col bg-gray-100 justify-center items-center'>
            <h1 className='text-2xl font-sans text-gray-800 font-bold'>Available Crypto Currencies</h1>
            <p className='text-gray-500 text-lg mb-6'>Total Coins: {coins.length}</p>
            {
                coins.map(coin => <CoinCard
                    key={coin.id} coin={coin}
                ></CoinCard>)
            }
        </div>

    );
};

export default Coins;