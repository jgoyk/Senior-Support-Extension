import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import '../assets/tailwind.css';

const MyCustomContextMenu = ({ targetId, options, className1 }) => {
  const [contextData, setContextData] = useState({ visible: false, posX: 0, posY: 0 });
  const contextRef = useRef(null);

  useEffect(() => {
    const contextMenuEventHandler = (event) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement && targetElement.contains(event.target)) {
        event.preventDefault();
        setContextData((prevData) => ({
          ...prevData,
          visible: true,
          posX: event.clientX,
          posY: event.clientY,
        }));
      } else if (contextRef.current && !contextRef.current.contains(event.target)) {
        setContextData((prevData) => ({
          ...prevData,
          visible: false,
        }));
      }
    };

    const offClickHandler = (event) => {
      if (contextRef.current && !contextRef.current.contains(event.target)) {
        setContextData((prevData) => ({
          ...prevData,
          visible: false,
        }));
      }
    };

    document.addEventListener('contextmenu', contextMenuEventHandler);
    document.addEventListener('click', offClickHandler);
    return () => {
      document.removeEventListener('contextmenu', contextMenuEventHandler);
      document.removeEventListener('click', offClickHandler);
    };
  }, [targetId]);

  useLayoutEffect(() => {
    setContextData((prevData) => {
      let newData = { ...prevData };
      if (newData.posX + contextRef.current?.offsetWidth > window.innerWidth) {
        newData.posX = newData.posX - contextRef.current?.offsetWidth;
      }
      if (newData.posY + contextRef.current?.offsetHeight > window.innerHeight) {
        newData.posY = newData.posY - contextRef.current?.offsetHeight;
      }
      return newData;
    });
  }, []);

  return (
    <div
      ref={contextRef}
      className='flex flex-col justify-center align-center absolute h-auto w-fit min-w-[150px] z-40'
      style={{ display: contextData.visible ? 'block' : 'none', left: contextData.posX, top: contextData.posY }}
    >
      <div className={` bg-gray-500 rounded-sm p-1 ${className1}`}>
      {options.map((option) => (
        <div key={option.label} className="p-2 bg-gray-400 hover:bg-gray-600">
          <li className={` ${className1}`} onClick={() => {
            option.onClick();
          }}>
            {option.label}
          </li>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyCustomContextMenu;
