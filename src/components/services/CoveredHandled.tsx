'use client'

import React, { useState, useEffect } from 'react'
import { IoMdGlobe } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";

type CountUpAnimationItems = {
    iconComponent: JSX.Element;
    initialValue: number;
    targetValue: number;
    text: string;
    subtext: string;
}

const CountUpAnimation: React.FC<CountUpAnimationItems> = ({
    iconComponent,
    initialValue,
    targetValue,
    text,
    subtext,
}) => {
    const [count, setCount] = useState(initialValue);
    const duration = 4000; // 4 seconds
 
    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));
 
        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);
 
        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);
 
    return (
        <div className="flex items-center justify-between container text-center">
            <div className="text-8xl text-center">{iconComponent}</div>
            <div className="flex flex-col leading-8">
                <h2 className="text-2xl font-bold">{text}</h2>
                <p className="text-5xl font-bold text-black">{count}+</p>
                <p className="subtext">{subtext}</p>
            </div> 
        </div>
    );
};
 


const CoverdHandled = () => {
  return (
    <div>
        <div className="wrapper flex gap-5 flex-col lg:flex-row my-5">
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body text-center">
                    <CountUpAnimation
                        iconComponent={<IoMdGlobe />}
                        initialValue={0}
                        targetValue={70}
                        text=" We Covered"
                        subtext=" Locations all over india"
                    />
                </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <CountUpAnimation
                        iconComponent={<FaShippingFast />}
                        initialValue={0}
                        targetValue={260}
                        text=" We Handled"
                        subtext=" Customer base"
                    />
                </div>
            </div>
        </div>             
    </div>
  )
}

export default CoverdHandled