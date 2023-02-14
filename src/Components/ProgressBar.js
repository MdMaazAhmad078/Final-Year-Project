import React, { useState, useEffect } from 'react';
import "./ProgressBar.css";

export default function ProgressBar(props) {

    const [offset, setOffset] = useState(0);

    const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke } = props;


    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [setOffset, progress, circumference, offset]);
    return (
        <>
            <div>
                <svg className='circular_chart' width={size} height={size} style={{float:"right"}} >
                    <circle
                        className='circular_bg'
                        stroke={circleOneStroke}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                    ></circle>
                    <circle
                        className='circle'
                        stroke={circleTwoStroke}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    ></circle>
                    <text
                        x={center}
                        y={center}
                        className="percentage"
                    >
                        {progress}%
                    </text>
                </svg>
            </div>
        </>
    );
}