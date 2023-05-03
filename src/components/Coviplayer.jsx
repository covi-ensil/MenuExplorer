import React, { useEffect, useState, useRef } from 'react';

const Coviplayer = () => {

    const [count, setCount] = useState(0)
    const countRef = useRef(count)

    useEffect(() => {
        countRef.current = count
    }, [count])

    useEffect(() => {
        return () => {
            console.log("unmount 시 출력", countRef.current)
        }
    }, [])

    return (
        <>
            <div className='covi 코비'></div>
            <div className='test 코비'></div>
            <button className='clicker' onClick={() => setCount(c => c + 1)}>+</button>
            <div>hello</div>
        </>
    );
};

export default Coviplayer;
