import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import logo from './images/considering.gif';
import Clock from './components/Clock';
import jjongjjongMenus from './datas/jjongjjongFavoriteMenus.json';
import top69Menus from './datas/top69Menus.json';
import MenuOption from './components/MenuOption';

function App() {
    const [selectedMode, setSelectedMode] = useState('선택된 모드가 없습니다');
    const [menu, setMenu] = useState('몰?루');
    const [price, setPrice] = useState('가격')
    const [popularity, setPopularity] = useState('인기도')

    function handleModeSelect(event) {
        setMenu('몰?루')
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
        let randomIndex, menuList;
        if (selectedMode === '🕊️') {
            randomIndex = getRandomIndex(Object.keys(jjongjjongMenus).length);
            menuList = Object.keys(jjongjjongMenus);
            console.log('list :', menuList)
            setMenu(menuList[randomIndex]);
        }
        if (selectedMode === '🍱') {
            // console.log('selectedMode :', selectedMode)
            randomIndex = getRandomIndex(Object.keys(top69Menus).length);
            // console.log(randomIndex)
            menuList = Object.keys(top69Menus);
            console.log('list :', menuList)
            setMenu(menuList[randomIndex]);

            const priceList = Object.values(top69Menus).map(el => el.가격)
            const poplarityList = Object.values(top69Menus).map(el => el.인기도)
            // console.log(priceList)
            setPrice(priceList[randomIndex])
            setPopularity(poplarityList[randomIndex])
        }

    };

    return (
        <div className='w-full h-screen bg-white'>
            <div className='m'>
                <Clock />
            </div>
            <div className='mx-auto text-right pr-12 text-sm'>
                <p className='py-1'> 🕹️ : {selectedMode}</p>
            </div>
            <div className='flex flex-col justify-center items-center w-full py-12'>
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
                        className='rounded-2xl w-96 max-w-lg'
                        src={logo}
                        alt='considering...'
                    ></img>
                </div>
                {selectedMode === '선택된 모드가 없습니다' ? (
                    <div className='flex flex-col'>
                        <span className='text-center text-blue-500'>
                            선택된 모드가 없습니다
                            <button style={btnStyle}>
                                <FcSearch className='w-6 h-6' />
                            </button>
                        </span>
                        <div> 🥺 모드를 선택해 주세요 🥺 </div>
                    </div>
                ) : selectedMode === '🕊️' ? (
                    <div className='flex flex-col w-full'>
                        <span className='text-center text-blue-500'>
                            오늘의 쫑이 메뉴는?
                            <button onClick={handleRandomMenu} style={btnStyle}>
                                <FcSearch className='w-6 h-6' />
                            </button>
                        </span>
                        <div className='text-center'>{`✨ ${menu} ✨`}</div>
                    </div>
                ) : (
                    <div className='flex flex-col w-full'>
                        <span className='text-center text-blue-500'>
                            오늘의 저녁 인기 메뉴는?
                            <button onClick={handleRandomMenu} style={btnStyle}>
                                <FcSearch className='w-6 h-6' />
                            </button>
                        </span>
                        <div className='text-center'>{`✨ ${menu} ✨`}</div>
                        {/* <div className='text-center'>{`✨ 가격 : ${price} ✨`}</div>
                        <div className='text-center'>{`✨ 인기도 : ${popularity} ✨`}</div> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
