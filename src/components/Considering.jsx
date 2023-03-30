import React, { useEffect, useRef } from 'react';
import logo from '../images/considering.mp4';

const Considering = ({ selectedMode, handleRandomMenu }) => {
    const videoRef = useRef(null);
    
    useEffect(() => {
        const video = videoRef.current;
        const playPromise = video.play();
        videoRef.current.playsInline = true;

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // 비디오 재생이 성공적으로 시작됨
                })
                .catch((err) => {
                    // 비디오 재생이 실패함
                    // window.alert(err);
                });
        }
    }, []);

    return (
        <div className='py-4'>
            {selectedMode !== '선택된 모드가 없습니다' ? (
                <video
                    ref={videoRef}
                    src={logo}
                    playsInline
                    webkit-playsinline="true"
                    muted
                    autoPlay
                    loop
                    className='rounded-2xl w-72 h-42 max-w-lg considering'
                    alt='considering...'
                    onClick={handleRandomMenu}
                />
            ) : (
                <video
                    ref={videoRef}
                    src={logo}
                    playsInline
                    webkit-playsinline="true"
                    muted
                    autoPlay
                    loop
                    className='rounded-2xl w-72 h-42 max-w-lg cursor-not-allowed'
                />
            )}
        </div>
    );
};

export default Considering;
