import logo from './logo.svg';
import './App.css';
import { FcSearch } from 'react-icons/fc';

function App() {
  const jjongjjongFavoriteMenus = [
    '김치찌개',
    '곱창구이',
    '짜장면',
    '지코바치밥',
    '삼겹살',
    '떡볶이',
    '곱창전골',
    '찜닭',
    '마라탕',
    '간장계란밥',
    '닭볶음탕',
    '짬뽕',
    '족발',
    '감자탕',
    '라멘',
    '마라상궈',
    '쪽갈비',
    '빈대떡',
    '일식 돈까스',
    '쭈꾸미',
    '오리고기',
    '탕수육',
    '훠궈',
    '닭발',
    '보쌈',
    '낚곱새',
    '장어',
    '회',
    '월남쌈',
    '조개구이',
    '초밥(스시)',
    '똠양꿍',
    '양념갈비',
    '양념게장 or 간장게장',
  ];

  // console.log(jjongjjongFavoriteMenus.length)

  // 0 < Math.random() <1
  // 여기서 데이터의 길이만큼 곱한 후 parseInt로 정수화시키면 해당 데이터의 길이를 넘지않는 랜덤한 수를 구할 수 있음!

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  };

  // console.log(getRandomIndex(jjongjjongFavoriteMenus.length));

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

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Dr. JjongJjong's Menu Big Data</p>
        <span>
          오늘의 저녁 메뉴는?
          <button onClick={() => window.location.reload()} type='reset' style={btnStyle}>
            <FcSearch />
          </button>{' '}
        </span>
        <div>
          {' ✨ ' +
            jjongjjongFavoriteMenus[
              getRandomIndex(jjongjjongFavoriteMenus.length)
            ] +
            ' ✨'}
        </div>
      </header>
    </div>
  );
}

export default App;
