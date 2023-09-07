import { createRoot } from 'react-dom/client';
import '../assets/tailwind.css';
import React from 'react';
import ToggleSwitch from './toggleswitch';

function Popup() {
  return (
    <div className="w-full p-4">
      
      <h1 className="text-3xl mt-4">Assistance Settings</h1>
      <p>Magnifying Glass</p>
      <ToggleSwitch />
      
    </div>
  );
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Popup />);
