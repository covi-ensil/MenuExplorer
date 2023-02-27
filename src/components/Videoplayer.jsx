import React, { useRef, useState, useEffect } from 'react';
import video from '../images/V19535041.mp4';

/**
 * Videoplayer 컴포넌트
 * @returns {any}
 */
function Videoplayer() {
  const ex = 'https://josecuono.dev/video1.mp4';
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

// JSDoc syntax를 사용하는 방법
/**
 * 두 수의 차를 구한다.
 * @param {number} a - the first thing
 * @param {number} b - the second thing
 * @returns {number}
 */
 const subtract = (a, b) => a - b;

  console.log(subtract(10,'3'))

  // 매개변수들은 다양한 구문형식으로 선언될 수 있습니다
/**
 * @param {string}  p1 - string 매개변수.
 * @param {string} p2 - 선택적 매개변수 (클로저 구문)
 * @param {string} [p3] - 또다른 선택적 매개변수 (JSDoc 구문).
 * @param {string} [p4="test"] - 기본값과 선택적 매개변수
 * @return {string} 이것은 결과 값입니다
 */
function stringsStringStrings(p1, p2, p3, p4) {
  // TODO
}

  /**
   * `isPlaying 상태값`에 따라 video를 정지시키거나 재생시킵니다.
   */
  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='relative rounded-lg overflow-hidden'>
      <video
        ref={videoRef}
        className='w-full h-full object-cover'
        onClick={togglePlay}
      >
        <source src={video} type='video/mp4' />
      </video>
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          isPlaying ? 'hidden' : 'bg-gray-900 bg-opacity-75'
        }`}
      >
        <button
          onClick={togglePlay}
          className='text-white text-3xl hover:text-gray-400'
        >
          ▶️
        </button>
      </div>
      <div className='absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-gray-900 bg-opacity-75'>
        <button
          onClick={() => (videoRef.current.currentTime -= 10)}
          className='text-white text-xl hover:text-gray-400 mr-2'
        >
          ⏪
        </button>
        <button
          onClick={togglePlay}
          className='text-white text-xl hover:text-gray-400 mr-2'
        >
          {isPlaying ? '⏸' : '▶️'}
        </button>
        <button
          onClick={() => (videoRef.current.currentTime += 10)}
          className='text-white text-xl hover:text-gray-400'
        >
          ⏩
        </button>
      </div>
    </div>
  );
}

export default Videoplayer;
