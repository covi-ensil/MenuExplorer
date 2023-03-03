import React, { useState } from 'react';

export default function MenuOption({selectedMenu, handleMenuSelect}) {

    return (
        <div>
            <select onChange={handleMenuSelect} id='menu-select'>
                <option value='선택된 모드가 없습니다'>
                    {' '}
                    모드를 선택해 주세요{' '}
                </option>
                <option value='🕊️'>🕊️ 쫑이가 좋아하는메뉴</option>
                <option value='🍱'>🍱 요즘 인기있는 69가지 메뉴</option>
            </select>
        </div>
    );
}
