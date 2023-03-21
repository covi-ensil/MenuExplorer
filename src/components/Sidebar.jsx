import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Toggle from './Toggle';

const Sidebar = ({isDarkMode, handleToggleClick}) => {
    return (
        <div className='flex'>
            <div className='flex'>
                <Toggle isDarkMode={isDarkMode} handleToggleClick={handleToggleClick} />
            </div>
            <div className='ml-4 pb-1'>
                <GiHamburgerMenu className=' text-white cursor-pointer' />
            </div>
        </div>
    );
};

export default Sidebar;
