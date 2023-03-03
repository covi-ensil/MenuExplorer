import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import logo from './images/considering.gif';
import video from './images/snow.mp4';
import Clock from './components/Clock';
import Menus from './jjongjjongFavoriteMenus.json';

function App() {
  const [menu, setMenu] = useState('몰?루');

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
      <div className='flex flex-col justify-center items-center w-full h-full gap-4'>
        <h1 className='text-xl md:text-3xl'>Dr. JjongJjong's Menu Big Data</h1>
        <div className='px-12'>
          <img className='rounded-2xl' src={logo} alt='considering...'></img>
        </div>
        <span className='text-blue-500'>
          오늘의 저녁 메뉴는?
          <button onClick={handleRandomMenu} style={btnStyle}>
            <FcSearch />
          </button>
        </span>
        <div>{`✨ ${menu} ✨`}</div>
      </div>
    </div>
  );
}

export default App;