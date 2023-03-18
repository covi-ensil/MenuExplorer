import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import logo from './images/considering.webp';
import defaultImg from './images/riceJokeBear.png';
import Clock from './components/Clock';
import jjongjjongMenus from './datas/jjongjjongFavoriteMenus.json';
import top69Menus from './datas/top69Menus.json';
import MenuOption from './components/MenuOption';
import Sidebar from './components/Sidebar';

function App() {
    const [selectedMode, setSelectedMode] = useState('선택된 모드가 없습니다');
    const [selectedMenu, setSelectedMenu] = useState('몰?루');
    const [menuImg, setMenuImg] = useState('');
    const [price, setPrice] = useState('가격');
    const [popularity, setPopularity] = useState('인기도');

    function handleModeSelect(event) {
        setSelectedMenu('몰?루');
        setMenuImg(defaultImg);
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
            console.log('list :', menuList);
            setSelectedMenu(menuList[randomIndex]);
        }
        if (selectedMode === '🍱') {
            // console.log('selectedMode :', selectedMode)
            randomIndex = getRandomIndex(Object.keys(top69Menus).length);
            // console.log(randomIndex)
            menuList = Object.keys(top69Menus);
            console.log('list :', menuList);

            setSelectedMenu(menuList[randomIndex]);

            const priceList = Object.values(top69Menus).map((el) => el.가격);
            const poplarityList = Object.values(top69Menus).map(
                (el) => el.인기도
            );
            const imgList = Object.values(top69Menus).map((el) => el.사진);
            // console.log(imgList[randomIndex])
            setPrice(priceList[randomIndex]);
            setPopularity(poplarityList[randomIndex]);
            setMenuImg(imgList[randomIndex]);
        }
    };

    return (
        <div className="flex flex-col items-center w-full h-[100vh] bg-white ">
            <div className="w-full flex justify-between items-end max-w-screen-sm xl:max-w-screen-xl pr-4 bg-blue-400 py-2">
            <h1 className='text-white pl-4'>Dr.JJ's Random Menu</h1>
                <Sidebar />
            </div>
            <div className=" w-full max-w-screen-sm xl:max-w-screen-xl">
                <div className="mx-auto max-w-screen-sm w-full xl:max-w-screen-xl">
                    <Clock />
                </div>
                <div className="mx-auto text-right pr-4 text-sm max-w-screen-sm xl:max-w-screen-xl">
                    <p className="py-1"> 🕹️ : {selectedMode}</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full py-12">
                    <MenuOption handleModeSelect={handleModeSelect} />
                </div>
                <div className="flex flex-col justify-center items-center w-full h-[60%] gap-4 max-w-screen-sm xl:max-w-screen-xl">
                    <div className="px-12">
                        <img
                            className="rounded-2xl w-72 max-w-lg"
                            src={logo}
                            alt="considering..."
                        ></img>
                    </div>
                    {selectedMode === '선택된 모드가 없습니다' ? (
                        <div className="flex flex-col">
                            <span className="text-center text-blue-500">
                                선택된 모드가 없습니다
                                <button style={btnStyle}>
                                    <FcSearch className="w-6 h-6" />
                                </button>
                            </span>
                            <div> 🥺 모드를 선택해 주세요 🥺 </div>
                        </div>
                    ) : selectedMode === '🕊️' ? (
                        <div className="flex flex-col w-full">
                            <span className="text-center text-blue-500">
                                오늘의 쫑이 메뉴는?
                                <button
                                    onClick={handleRandomMenu}
                                    style={btnStyle}
                                >
                                    <FcSearch className="w-6 h-6" />
                                </button>
                            </span>
                            <div className="text-center py-4">{`✨ ${selectedMenu} ✨`}</div>
                            {menuImg === defaultImg ? (
                                <img
                                    className="mx-auto w-56 h-60 max-w-xs rounded-lg"
                                    src={menuImg}
                                    alt="menuImg"
                                />
                            ) : (
                                <img
                                    className="mx-auto pt-4 w-72 h-52 max-w-xs max-h-52 rounded-lg"
                                    src={menuImg}
                                    alt="menuImg"
                                />
                            )}
                        </div>
                    ) : (
                        <div className="flex flex-col w-full">
                            <span className="text-center text-blue-500">
                                오늘의 저녁 인기 메뉴는?
                                <button
                                    onClick={handleRandomMenu}
                                    style={btnStyle}
                                >
                                    <FcSearch className="w-6 h-6" />
                                </button>
                            </span>
                            <div className="text-center  py-4">{`✨ ${selectedMenu} ✨`}</div>
                            {menuImg === defaultImg ? (
                                <img
                                    className="mx-auto w-56 h-60 max-w-xs rounded-lg"
                                    src={menuImg}
                                    alt="menuImg"
                                />
                            ) : (
                                <img
                                    className="mx-auto pt-4 w-72 h-52 max-w-xs max-h-52 rounded-lg"
                                    src={menuImg}
                                    alt="menuImg"
                                />
                            )}
                            {/* <div className='text-center'>{`✨ 가격 : ${price} ✨`}</div>
                        <div className='text-center'>{`✨ 인기도 : ${popularity} ✨`}</div> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
