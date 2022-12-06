import logo from './logo.svg';
import './App.css';
import { FcSearch } from 'react-icons/fc';
import Menus from './jjongjjongFavoriteMenus.json'
import { useState } from 'react';

function App() {

  // console.log(jjongjjongFavoriteMenus.length)

  // 0 < Math.random() <1
  // 여기서 데이터의 길이만큼 곱한 후 parseInt로 정수화시키면 해당 데이터의 길이를 넘지않는 랜덤한 수를 구할 수 있음!

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  };

  const btnStyle = {
    color: 'white',
    background: '#282c34',
    margin: '0px 3px',
    padding: '',
    border: '.5px solid teal',
    borderRadius: '.25rem',
    fontSize: '1rem',
    lineHeight: 1.5,
  };

  const [menu, setMenu] = useState("?")

  const RandomMenu = () => {
    let RandomINdex = getRandomIndex(Object.keys(Menus).length)
    let MenuList = Object.keys(Menus)
    setMenu(menu => MenuList[RandomINdex] )
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Dr. JjongJjong's Menu Big Data</p>
        <span>
          오늘의 저녁 메뉴는?
          {/* <button onClick={() => window.location.reload()} type='reset' style={btnStyle}> */}
          <button onClick={() => RandomMenu()} style={btnStyle}>
            <FcSearch />
          </button>{' '}
        </span>
        <div>
          {' ✨ ' +
            menu
             +
            ' ✨'}
        </div>
      </header>
    </div>
  );
}

export default App;
