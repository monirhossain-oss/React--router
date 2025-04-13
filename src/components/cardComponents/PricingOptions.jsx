import React, { use } from 'react';
import CardItem from '../cardItems/CardItem';

const PricingOptions = ({ prichingPromised }) => {
    const pricingData = use(prichingPromised);
    // console.log(pricingData)
    return (
        <div>
            <h2 className="text-5xl ml-4 mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Here Our Plans
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                {
                    pricingData.map(pricing => <CardItem key={pricing.id} pricing={pricing}></CardItem>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;