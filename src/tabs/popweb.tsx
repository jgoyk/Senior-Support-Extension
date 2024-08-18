import React from 'react';

function OptionTile({ title, url, imageUrl, selectedOptions, handleOptionClick }) {
  const isSelected = selectedOptions.some((option) => option.myTitle === title);
  
  return (
    <div
      className={`${
        isSelected
          ? "border-2 text-lg border-blue-600 bg-gray-300 p-4 m-4 w-50 flex flex-col justify-around items-center  rounded-md cursor-pointer relative"
          : "bg-white text-lg p-4 m-4 border-2 border-opacity-50 border-black w-50 flex flex-col justify-around items-center  rounded-md cursor-pointer hover:bg-gray-300 relative"
      }`}
      onClick={() => handleOptionClick(title, url, imageUrl)}
    >
      
      
      
      <div className="px-2 font-semibold select-none p-1">{title}</div>
      <img src={imageUrl} draggable="false" height="50" width="50" alt={title} />
    </div>
  );
}

export default OptionTile;
