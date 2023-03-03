import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import logo from './images/considering.gif';
import video from './images/snow.mp4';
import Clock from './components/Clock';
import Menus from './datas/jjongjjongFavoriteMenus.json';
import top69Menus from './datas/jjongjjongFavoriteMenus.json';
import MenuOption from './components/MenuOption';

function App() {
    const [menu, setMenu] = useState('몰?루');
    const [selectedMode, setSelectedMode] = useState('선택된 모드가 없습니다');

    function handleModeSelect(event) {
        setSelectedMode(event.target.value);
    }

    // Refactor getRandomIndex to a one-liner function
    const getRandomIndex = (length) => parseInt(Math.random() * length);

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

    const handleRandomMenu = () => {
        const randomIndex = getRandomIndex(Object.keys(Menus).length);
        const menuList = Object.keys(Menus);
        setMenu(menuList[randomIndex]);
    };

    return (
        <div className='w-full h-screen bg-white'>
            <div className='m'>
                <Clock />
            </div>
            <div className='mx-auto text-right pr-12 text-sm'>
                <p className='py-1'> 🕹️ : {selectedMode}</p>
            </div>
            <div className='flex flex-col justify-center items-center w-full pt-12'>
                <MenuOption
                    selectedMenu={selectedMode}
                    handleModeSelect={handleModeSelect}
                />
            </div>
            <div className='flex flex-col justify-center items-center w-full h-[40%] gap-4'>
                <h1 className='text-xl md:text-3xl'>
                    Dr. JjongJjong's Menu Big Data
                </h1>
                <div className='px-12'>
                    <img
                        className='rounded-2xl'
                        src={logo}
                        alt='considering...'
                    ></img>
                </div>
                {selectedMode === '선택된 모드가 없습니다' ? (
                    ''
                ) : (
                    <div>
                        <span className='text-blue-500'>
                            오늘의 저녁 메뉴는?
                            <button onClick={handleRandomMenu} style={btnStyle}>
                                <FcSearch />
                            </button>
                        </span>
                        <div>{`✨ ${menu} ✨`}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
