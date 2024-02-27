import React, { useState } from 'react';
import './MultiRangeSlider.css'; // Make sure to create this CSS file

function MultiRangeSlider() {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handleMinValueChange = (event) => {
        setMinValue(Math.min(event.target.value, maxValue - 1));
    };

    const handleMaxValueChange = (event) => {
        setMaxValue(Math.max(event.target.value, minValue + 1));
    };

    return (
        <div className='w-full flex items-center space-x-2 max-w-[320px]'>
            <div className='relative w-full'>
                <input
                    type="range"
                    className="thumb thumb--left"
                    min="0"
                    max="100"
                    value={minValue}
                    onChange={handleMinValueChange}
                />
                <input
                    type="range"
                    className="thumb thumb--right"
                    min="0"
                    max="100"
                    value={maxValue}
                    onChange={handleMaxValueChange}
                />
                <div className="slider-track"></div>
                <div className="slider-range" style={{ left: `${minValue}%`, right: `${100 - maxValue}%` }}></div>
            </div>

            <div className=' mt-3'> 
                <label className=" whitespace-nowrap text-white"> {minValue} - {maxValue}</label>

            </div>
        </div>
    );
}

export default MultiRangeSlider;
