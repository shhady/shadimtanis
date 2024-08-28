'use client'
import { useEffect, useRef } from 'react';

const Carousel = () => {
  const dragContainerRef = useRef(null);
  const spinContainerRef = useRef(null);

  useEffect(() => {
    const dragContainer = dragContainerRef.current;
    const spinContainer = spinContainerRef.current;

    let radius = 240;  // Changed to let
    const autoRotate = true;
    const rotateSpeed = -60;
    const imgWidth = 120;
    const imgHeight = 170;

    spinContainer.style.width = `${imgWidth}px`;
    spinContainer.style.height = `${imgHeight}px`;

    const ground = document.getElementById('ground');
    ground.style.width = `${radius * 3}px`;
    ground.style.height = `${radius * 3}px`;

    function init(delayTime) {
      const elements = [...spinContainer.getElementsByTagName('img'), ...spinContainer.getElementsByTagName('video')];
      elements.forEach((ele, i) => {
        ele.style.transform = `rotateY(${i * (360 / elements.length)}deg) translateZ(${radius}px)`;
        ele.style.transition = `transform 1s`;
        ele.style.transitionDelay = delayTime || `${(elements.length - i) / 4}s`;
      });
    }

    function applyTransform(obj) {
      const tX = 0;
      const tY = 10;
      obj.style.transform = `rotateX(${tY}deg) rotateY(${tX}deg)`;
    }

    function playSpin(yes) {
      spinContainer.style.animationPlayState = (yes ? 'running' : 'paused');
    }

    let sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;

    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      spinContainer.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    document.onpointerdown = function (e) {
      clearInterval(dragContainer.timer);
      e = e || window.event;
      sX = e.clientX;
      sY = e.clientY;

      document.onpointermove = function (e) {
        e = e || window.event;
        nX = e.clientX;
        nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(dragContainer);
        sX = nX;
        sY = nY;
      };

      document.onpointerup = function () {
        dragContainer.timer = setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform(dragContainer);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(dragContainer.timer);
            playSpin(true);
          }
        }, 17);
        document.onpointermove = document.onpointerup = null;
      };

      return false;
    };

    document.onmousewheel = function (e) {
      e = e || window.event;
      const d = e.wheelDelta / 20 || -e.detail;
      radius += d;  // Allowed reassignment
      init(1);
    };

    init(1000);
  }, []);

  return (
    <div ref={dragContainerRef} id="drag-container" className="relative flex items-center justify-center">
      <div ref={spinContainerRef} id="spin-container" className="relative">
        <img src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <a target="_blank" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg">
          <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </a>
        <video controls autoPlay loop className="absolute inset-0 w-full h-full object-cover">
          <source src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <p className="absolute inset-0 flex items-center justify-center text-white font-serif">3D Tiktok Carousel</p>
      </div>
      <div id="ground" className="absolute"></div>
      <div id="music-container" className="absolute"></div>
      <a href="https://github.com/HoangTran0410/3DCarousel" target="_blank" className="absolute top-0 right-0 p-4 text-white" aria-label="View source on GitHub">
        <svg width="80" height="80" viewBox="0 0 250 250" style={{ fill: '#fff', color: '#000', position: 'absolute', top: 0, border: 0, right: 0 }} aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px' }} className="octo-arm"></path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,81.4 126.3,80.6 C118.5,66.2 117.8,62.6 122.6,59.5 C115.6,55.2 113.3,56.0 113.3,56.0 C113.6,59.4 111.2,59.8 110.8,61.3 C110.1,64.1 112.4,67.6 112.4,67.6 C107.4,64.3 108.0,61.7 110.6,57.9 C117.6,51.0 123.2,60.8 125.4,63.0 C127.4,65.0 126.6,64.8 129.3,68.1" fill="currentColor" style={{ transformOrigin: '120px 75px' }} className="octo-arm"></path>
        </svg>
      </a>
    </div>
  );
};

export default Carousel;
