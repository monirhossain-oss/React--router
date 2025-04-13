import { LucideCircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    // console.log(feature)
    return (
        <p className='flex mt-4 '><LucideCircleCheckBig className='mr-2'></LucideCircleCheckBig> {feature}</p>
    );
};

export default Feature;