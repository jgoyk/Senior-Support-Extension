import React, { useEffect, useState } from 'react';
import Menu from './menu';
import '../assets/tailwind.css';
import MyCustomContextMenu from './mycustomcontextmenu';
import Magnifier from './magnifier';


function Tabs() {
  const [isMagnifierEnabled, setIsMagnifierEnabled] = useState(false);

  useEffect(() => {
    const handleMessage = (request, sender, sendResponse) => {
      if (request.action === "TOGGLE_MAGNIFIER") {
        setIsMagnifierEnabled(request.data.isEnabled);
      }
    };
    chrome.runtime.onMessage.addListener(handleMessage);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);

  return (
    <Magnifier isEnabled={isMagnifierEnabled}>
      <div className="h-screen w-screen bg-gray-700 flex">
          <div id="customContextmenuArea2" className="flex-1 overflow-hidden">
            <Menu />
          </div>
      </div>
    </Magnifier>
  );
}

export default Tabs;
