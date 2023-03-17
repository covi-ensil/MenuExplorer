import React, { useState } from 'react';
import defaultImg from '../images/riceJokeBear.png';

export default function MenuOption({ handleModeSelect }) {
    
    return (
        <div>
            <select onChange={handleModeSelect} id='menu-select'>
                <option value='선택된 모드가 없습니다'>
                    {' '}
                    모드를 선택해 주세요{' '}
                </option>
                <option value='🕊️'>🕊️ 쫑이가 좋아하는 34가지 메뉴</option>
                <option value='🍱'>🍱 요즘 인기있는 69가지 메뉴</option>
            </select>
        </div>
    );
}
