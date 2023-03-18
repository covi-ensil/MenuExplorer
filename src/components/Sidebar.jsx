import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';




const Sidebar = () => {
  return (
    <div className='flex'>
        <div className='pb-1'>
            <GiHamburgerMenu className=' text-white cursor-pointer' />
        </div>
    </div>
  )
}

export default Sidebar