import React, { useState, useEffect } from 'react';

function Clock({ isDarkMode }) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 500);
        return () => {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <div
            className={`${
                isDarkMode ? 'text-white' : 'text-black'
            } text-right px-4 `}
        >
            <span className=' text-xs'>
                {date.toLocaleTimeString().slice(2)}
            </span>
        </div>
    );
}

export default Clock;
