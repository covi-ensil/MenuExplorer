import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import defaultImg from '../images/riceJokeBear.png';

const Main = ({ selectedMode, selectedMenu, menuImg, handleRandomMenu, isDarkMode }) => {
    const btnStyle = {
        color: 'white',
        background: 'white',
        margin: '0px 3px',
        padding: '',
        border: '.5px solid teal',
        borderRadius: '.25rem',
        fontSize: '1rem',
        lineHeight: 1.5,
    };

    return (
        <div>
            {selectedMode === '선택된 모드가 없습니다' ? (
                <div className='flex flex-col'>
                    <span className={`${isDarkMode? 'text-indigo-500' : 'text-blue-500'} text-center pb-2`}>
                        선택된 모드가 없습니다
                        <button style={btnStyle}>
                            <FcSearch className='w-6 h-6' />
                        </button>
                    </span>
                    <div className={`${isDarkMode? 'text-white' : 'text-black'} text-center`}> 🥺 모드를 선택해 주세요 🥺 </div>
                </div>
            ) : selectedMode === '🕊️' ? (
                <div className='flex flex-col w-full'>
                    <span className={`${isDarkMode? 'text-indigo-500' : 'text-blue-500'} text-center `}>
                        오늘의 쫑이 메뉴는?
                        <button onClick={handleRandomMenu} style={btnStyle}>
                            <FcSearch className='w-6 h-6' />
                        </button>
                    </span>
                    <div className='content'>
                        <div className={`${isDarkMode? 'text-white' : 'text-black'} text-center py-2`}>{`✨ ${selectedMenu} ✨`}</div>
                        {menuImg === defaultImg ? (
                            <img
                                className='mx-auto w-56 h-60 max-w-xs rounded-lg'
                                src={menuImg}
                                alt='menuImg'
                            />
                        ) : (
                            <img
                                className='mx-auto pt-4 w-72 h-52 max-w-xs max-h-52 rounded-lg rounded-t-3xl'
                                src={menuImg}
                                alt='menuImg'
                            />
                        )}
                        {/* <div className='text-center'>{`✨ 가격 : ${price} ✨`}</div>
                        <div className='text-center'>{`✨ 인기도 : ${popularity} ✨`}</div> */}
                    </div>
                </div>
            ) : (
                <div className='flex flex-col w-full'>
                    <span className={`${isDarkMode? 'text-indigo-500' : 'text-blue-500'} text-center `}>
                        오늘의 저녁 인기 메뉴는?
                        <button onClick={handleRandomMenu} style={btnStyle}>
                            <FcSearch className='w-6 h-6' />
                        </button>
                    </span>

                    <div className='content'>
                        <div className={`${isDarkMode? 'text-white' : 'text-black'} text-center  py-4`}>{`✨ ${selectedMenu} ✨`}</div>
                        {menuImg === defaultImg ? (
                            <img
                                className='mx-auto w-56 h-60 max-w-xs rounded-lg'
                                src={menuImg}
                                alt='menuImg'
                            />
                        ) : (
                            <img
                                className='mx-auto pt-4 w-72 h-52 max-w-xs max-h-52 rounded-lg rounded-t-3xl'
                                src={menuImg}
                                alt='menuImg'
                            />
                        )}
                        {/* <div className='text-center'>{`✨ 가격 : ${price} ✨`}</div>
                        <div className='text-center'>{`✨ 인기도 : ${popularity} ✨`}</div> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Main;
