import React from 'react';

export default function MenuOption({ isDarkMode, handleModeSelect }) {
    return (
        <div className=''>
            <select
                onChange={handleModeSelect}
                id='menu-select'
                className={`${
                    isDarkMode ? 'bg-gray-600' : ' bg-blue-400'
                } text-white rounded-lg text-center w-72 h-8 cursor-pointer`}
            >
                <option value='선택된 모드가 없습니다'>
                    모드를 선택해 주세요
                </option>
                <option value='🕊️'>🕊️ 쫑이가 좋아하는 34가지 메뉴</option>
                <option value='🍱'>🍱 요즘 인기있는 69가지 메뉴</option>
            </select>
        </div>
    );
}
