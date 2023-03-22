import React from 'react';
import logo from '../images/considering.webp';

const Considering = ({ selectedMode, handleRandomMenu }) => {
    return (
        <div className='px-12 py-4'>
            {selectedMode !== '선택된 모드가 없습니다' ? (
                <img
                    className='rounded-2xl w-72 h-42 max-w-lg considering'
                    src={logo}
                    alt='considering...'
                    onClick={handleRandomMenu}
                ></img>
            ) : (
                <img
                    className='rounded-2xl w-72 h-42 max-w-lg cursor-not-allowed'
                    src={logo}
                    alt='considering...'
                ></img>
            )}
        </div>
    );
};

export default Considering;