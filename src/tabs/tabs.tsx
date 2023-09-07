import React from 'react';
import Menu from './menu';
import '../assets/tailwind.css';
import MyCustomContextMenu from './mycustomcontextmenu';
import Magnifier from './magnifier';


function Tabs() {

  const handleViewClick = () => {
    console.log('View clicked');
  };

  const handleUpdateClick = () => {
    console.log('Update clicked');
  };

  const handleDeleteClick = () => {
    console.log('Delete clicked');
  };
  return (
    <Magnifier>
      <div className="h-screen w-screen bg-gray-700 flex">
        {/* <MyCustomContextMenu
          targetId='customContextmenuArea2'
          options={[
            { label: 'View', onClick: handleViewClick },
            { label: 'Update', onClick: handleUpdateClick },
            { label: 'Fart', onClick: handleDeleteClick },
          ]}
          className1="cursor-pointer"
        /> */}
          <div id="customContextmenuArea2" className="flex-1 overflow-hidden m-8">
            <Menu />
          </div>
      </div>
    </Magnifier>
  );
}

export default Tabs;
