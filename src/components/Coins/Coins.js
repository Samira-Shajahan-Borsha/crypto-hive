import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {

    const coins = useLoaderData();

    return (
        <div className='flex flex-col bg-gray-100 px-4 py-20 mx-auto md:px-10'>
            <h1 className='text-3xl font-sans text-gray-800 font-bold text-center'>Available Crypto Currencies</h1>
            <p className='text-gray-500 text-xl mb-6 text-center mt-2 font-normal'>Total Coins: {coins.length}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-5'>
                {
                    coins.map(coin => <CoinCard
                        key={coin.id} coin={coin}
                    ></CoinCard>)
                }
            </div>
        </div>

    );
};

export default Coins;