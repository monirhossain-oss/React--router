import React from 'react';
import Feature from './feature';

const CardItem = ({ pricing }) => {
    const { title, description, features, price } = pricing;
    // console.log(pricing)
    return (
        // full card  
        <div className='bg-stone-700  flex flex-col gap-4 p-4 rounded-3xl border-2 border-orange-400'>
            {/* card head  */}
            <div>
                <h2 className='text-4xl  ml-4 mb-8 bg-gradient-to-r from-green-400 via-yellow-300 to-pink-500 bg-clip-text text-transparent font-bold'>{title}</h2>
                <p className='font-bold text-2xl  ml-4 mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>{price}</p>
            </div>
            {/* card body  */}
            <div className='text-black flex-1 bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 rounded-xl px-8 py-1'>
                <p>{description}</p>
                {
                    features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="btn rounded-2xl w-full hover:bg-amber-300 hover:text-black">Subscirbe</button>
        </div>
    );
};

export default CardItem;