import { useState, useEffect } from 'react';
import defaultImg from './images/riceJokeBear.png';
import loading from './images/loading.gif';
import Clock from './components/Clock';
import jjongjjongMenus from './datas/jjongjjongFavoriteMenus.json';
import top69Menus from './datas/top69Menus.json';
import MenuOption from './components/MenuOption';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Considering from './components/Considering';
import video from './images/considering.mp4';
import Coviplayer from './components/Coviplayer';

function App() {
    const [selectedMode, setSelectedMode] = useState('선택된 모드가 없습니다');
    const [selectedMenu, setSelectedMenu] = useState('몰?루');
    const [isLoading, setIsLoading] = useState('false');
    const [menuImg, setMenuImg] = useState('');
    const [price, setPrice] = useState('가격');
    const [popularity, setPopularity] = useState('인기도');

    // useEffect(() => {
    //     setIsLoading(true);
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //         setMenuImg(menuImg);
    //     }, 1200);
    //     return () => clearTimeout(timer);
    // }, [menuImg]);

    function handleModeSelect(event) {
        setSelectedMenu('몰?루');
        setMenuImg(defaultImg);
        setSelectedMode(event.target.value);
    }

    // Refactor getRandomIndex to a one-liner function
    const getRandomIndex = (length) => parseInt(Math.random() * length);

    const handleRandomMenu = () => {
        let randomIndex, menuList;
        if (selectedMode === '🕊️') {
            // console.log('selectedMode :', selectedMode)
            randomIndex = getRandomIndex(Object.keys(jjongjjongMenus).length);
            // console.log(randomIndex)
            menuList = Object.keys(jjongjjongMenus);
            // console.log('list :', menuList);

            setSelectedMenu(menuList[randomIndex]);

            const priceList = Object.values(jjongjjongMenus).map((el) => el.가격);
            const poplarityList = Object.values(jjongjjongMenus).map((el) => el.인기도);
            const imgList = Object.values(jjongjjongMenus).map((el) => el.사진);
            // console.log(imgList[randomIndex])
            setPrice(priceList[randomIndex]);
            setPopularity(poplarityList[randomIndex]);
            setMenuImg(imgList[randomIndex]);
        }
        if (selectedMode === '🍱') {
            // console.log('selectedMode :', selectedMode)
            randomIndex = getRandomIndex(Object.keys(top69Menus).length);
            // console.log(randomIndex)
            menuList = Object.keys(top69Menus);
            // console.log('list :', menuList);

            setSelectedMenu(menuList[randomIndex]);

            const priceList = Object.values(top69Menus).map((el) => el.가격);
            const poplarityList = Object.values(top69Menus).map((el) => el.인기도);
            const imgList = Object.values(top69Menus).map((el) => el.사진);
            // console.log(imgList[randomIndex])
            setPrice(priceList[randomIndex]);
            setPopularity(poplarityList[randomIndex]);
            setMenuImg(imgList[randomIndex]);
        }
    };

    const reloadPage = () => {
        window.location.reload(true);
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleClick = (e) => {
        e.stopPropagation();
        const newState = !isDarkMode;
        setIsDarkMode(newState);
        console.log('토글 버튼이 클릭됐어요');
    };

    // console.log(isLoading)

    return (
        <>
            <div className="flex flex-col items-center border border-gray-200">
                <div
                    className={`flex flex-col items-center w-full lg:w-[36rem] min-h-[100vh] max-h-[150vh] border border-gray-200 ${
                        isDarkMode ? 'bg-gray-400' : 'white'
                    }`}
                >
                    <div
                        className={`w-full flex justify-between items-end max-w-screen-lg xl:max-w-screen-2xl pr-4 py-2 ${
                            isDarkMode ? 'bg-gray-600' : 'bg-blue-400'
                        } `}
                    >
                        <h1 className={`pl-4 cursor-pointer text-white`} onClick={reloadPage}>
                            Dr.JJ's Random Menu
                        </h1>
                        <Sidebar isDarkMode={isDarkMode} handleToggleClick={handleToggleClick} />
                    </div>
                    <div className=" w-full max-w-screen-lg xl:max-w-screen-2xl">
                        <Clock isDarkMode={isDarkMode} />
                        <div className="mx-auto text-right pr-4 text-sm max-w-screen-lg xl:max-w-screen-2xl">
                            <p className={`${isDarkMode ? 'text-white' : 'text-black'} py-1`}> 🕹️ : {selectedMode}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full pt-4 pb-4">
                            <MenuOption handleModeSelect={handleModeSelect} isDarkMode={isDarkMode} />
                        </div>
                        <div className="flex flex-col justify-center items-center w-full h-[60%] max-w-screen-lg xl:max-w-screen-2xl ">
                            <Considering selectedMode={selectedMode} handleRandomMenu={handleRandomMenu} />
                            <Main
                                isDarkMode={isDarkMode}
                                selectedMode={selectedMode}
                                selectedMenu={selectedMenu}
                                menuImg={menuImg}
                                handleRandomMenu={handleRandomMenu}
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <Coviplayer />
            </div>
        </>
    );
}

export default App;
