import { FcSearch } from 'react-icons/fc';
import Menus from './jjongjjongFavoriteMenus.json';
import { useState } from 'react';
import logo from './images/considering.gif';
import food from './logo.svg';

function App() {
  const [menu, setMenu] = useState('몰?루');

  // 0 < Math.random() <1
  // 여기서 데이터의 길이만큼 곱한 후 parseInt로 정수화시키면 해당 데이터의 길이를 넘지않는 랜덤한 수를 구할 수 있음!
  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  };

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

  const RandomMenu = () => {
    let RandomINdex = getRandomIndex(Object.keys(Menus).length);
    let MenuList = Object.keys(Menus);
    setMenu((menu) => MenuList[RandomINdex]);
  };

  return (
    <div className=' w-full h-screen bg-white'>
      <div className='flex flex-col justify-center items-center w-full h-full gap-4'>
        <h1 className='text-xl md:text-3xl'>Dr. JjongJjong's Menu Big Data</h1>
        <div className='px-12'>
          <img className=' rounded-2xl' src={logo} alt='considering...'></img>
        </div>
        {/* <span className='text-8xl'>🤔</span> */}
        <span className=' text-blue-500'>
          오늘의 저녁 메뉴는?
          <button onClick={() => RandomMenu()} style={btnStyle}>
            <FcSearch />
          </button>{' '}
        </span>
        <div>{' ✨ ' + menu + ' ✨'}</div>
        <img src={food} className=' w-64' alt='logo' />
      </div>
    </div>
  );
}

export default App;
