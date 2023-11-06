import { createRoot } from 'react-dom/client';
import '../assets/tailwind.css';
import React from 'react';
import ToggleSwitch from './toggleswitch';

function Popup() {
  return (
    <div className="w-full p-4 bg-gray-300 shadow-xl">
      
      <h1 className="text-3xl font-bold mt-4">Assistance Settings</h1>
      <p className="text-xl font-semibold mt-4 text-center">Magnifying Glass</p>
      <div className="flex flex-row items-center justify-center ">
        <ToggleSwitch />
      </div>
      
      
    </div>
  );
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Popup />);
