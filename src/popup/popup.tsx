import { createRoot } from 'react-dom/client';
import '../assets/tailwind.css';
import React from 'react';

function Popup() {
  return (
    <div className="h-[500x] w-[250px] min-h-[500px] min-w-[250px] relative">
      <div className='p-4 bg-gray-300 shadow-xl min-h-screen w-full relative flex flex-col'>

        <h1 className="text-3xl font-bold mt-4 text-center">Assistance Settings</h1>
        <hr className='h-[1.5px] my-4 bg-gray-600 border-0 '/>
        <div className="text-center p-4 text-xl h-full w-full font-semibold bg-gray-400 grow shadow-inner">
          Coming Soon...
        </div>
      </div>
    </div>
  );
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Popup />);
