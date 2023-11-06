import React, { useState } from 'react';

const ToggleSwitch: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(prev => !prev);
        chrome.runtime.sendMessage({ action: "TOGGLE_MAGNIFIER", data: { isEnabled: !isChecked } });
    };
    return (
        <label className="relative inline-block w-[60px] h-9">
            <input 
                type="checkbox" 
                className="opacity-0 w-0 h-0"
                checked={isChecked}
                onChange={handleToggle}
            />
            <span 
                className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 
                            transition-all duration-400 ease-in-out rounded-full border border-black 
                            ${isChecked ? 'bg-blue-500' : 'bg-gray-500'}`}
            >
                <span 
                    className={`absolute transition-transform duration-400 ease-in-out 
                                transform ${isChecked ? 'translate-x-6' : 'translate-x-0'} 
                                w-7 h-7 left-1 bottom-1 bg-white rounded-full`}
                ></span>
            </span>
        </label>
    );
}

export default ToggleSwitch;
