import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoinDetails = () => {

    const coinDetails = useLoaderData();

    // console.log(coinDetails)

    const { name, image, country_origin, market_cap_rank, contract_address, hashing_algorithm, genesis_date, last_updated, community_score, developer_score, liquidity_score, public_interest_score } = coinDetails;

    return (
        <div className='px-4 pt-20 pb-24 mx-auto md:px-2 bg-gray-100'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center'>
                <div className='order-2 md:order-1'>
                    <h1 className='text-3xl'>General Info:</h1>
                    <hr />
                    <h1>Coin Name: {name}</h1>
                    <h1>Market Cap Rank: {market_cap_rank}</h1>
                    <h1> Origin: {country_origin ? country_origin : 'N/A'}</h1>
                    <h1>Contract Address: {contract_address ? contract_address : 'N/A'}</h1>
                    <h1>Hashing Algorithm: {hashing_algorithm ? hashing_algorithm : 'N/A'}</h1>
                    <h1>Genesis Date: {genesis_date ? genesis_date : 'N/A'}</h1>
                    <h1>Last Updated: {last_updated}</h1>

                    <h1 className='text-3xl mt-4'>Scores:</h1>
                    <hr />
                    <h1>Community Score: {community_score}</h1>
                    <h1>Developer Score: {developer_score}</h1>
                    <h1>Liquidity Score: {liquidity_score}</h1>
                    <h1>Public Interest Score: {public_interest_score}</h1>
                </div>
                <div className='flex order-1 md:order-2 justify-center items-center'>
                    <img src={image?.large} alt='coinImg' />
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;