import React from 'react';

function OptionTile({ title, url, imageUrl, selectedOptions, handleOptionClick }) {
  const isSelected = selectedOptions.some((option) => option.myTitle === title);
  
  return (
    <div
      className={`${
        isSelected
          ? "border-2 border-blue-600 bg-gray-300 p-2 m-2 w-50 flex items-center justify-center rounded-md cursor-pointer flex-col"
          : "bg-white p-2 m-2 border border-black w-50 flex items-center justify-center rounded-md cursor-pointer flex-col"
      }`}
      onClick={() => handleOptionClick(title, url, imageUrl)}
    >
      <div className="p-2 font-semibold select-none">{title}</div>
      <img src={imageUrl} draggable="false" height="50" width="50" alt={title} />
    </div>
  );
}

export default OptionTile;
