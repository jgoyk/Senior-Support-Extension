import React, { useEffect, useState } from "react";
import { HiPlusCircle, HiXMark } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";
import "../assets/tailwind.css";

import OptionTile from "./popweb";


const Menu = () => {
  const [clickedKey, setClickedKey] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customTitle, setCustomTitle] = useState("");
  const [customURL, setCustomURL] = useState("");
  const [color, setColor] = useState(JSON.parse(localStorage.getItem("color")) || "#374151");


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("submittedData")) || [];
    setSubmittedData(storedData);
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleEditorClick = (index) => {
    const updatedURL = submittedData[index].myURL;
    const updatedTitle = submittedData[index].myTitle;
    setCustomTitle(updatedTitle);
    setCustomURL(updatedURL);
    setEditorOpen(!isEditorOpen);
  };
  const defaultHandleEditorClick = (index) => {
    setEditorOpen(!isEditorOpen);
  };

  const handleSettingsClick = () => {
    setSettingsOpen(!isSettingsOpen);
  };


  const handleOptionClick = (title, url, img) => {
    const optionIndex = selectedOptions.findIndex(
      (option) => option.myTitle === title
    );

    if (optionIndex === -1) {
      setSelectedOptions([
        ...selectedOptions,
        { myTitle: title, myURL: url, myImage: img },
      ]);
    } else {
      const updatedOptions = selectedOptions.filter(
        (option) => option.myTitle !== title
      );
      setSelectedOptions(updatedOptions);
    }
  };

  const handleMultiSubmit = (e) => {
    e.preventDefault();

    if (submittedData.length + selectedOptions.length > 8) {
      alert("Maximum number of elements reached!");
      return;
    }

    const newData = [...selectedOptions, ...submittedData];
    if (customTitle && customURL) {
      newData.push({ myTitle: customTitle, myURL: customURL });
    }

    setSubmittedData(newData);
    localStorage.setItem("submittedData", JSON.stringify(newData));
    setCustomTitle("");
    setCustomURL("");
    setSelectedOptions([]);
    handleMenuClick();
  };

  const handleSingleSubmit = (e) => {
    e.preventDefault();

    if (submittedData.length == 8) {
      alert("Maximum number of elements reached!");
      return;
    }

    const newData = [...selectedOptions, ...submittedData];
    
    if (customTitle && customURL) {
      newData.push({ myTitle: customTitle, myURL: customURL });

      setSubmittedData(newData);
      localStorage.setItem("submittedData", JSON.stringify(newData));
      setCustomTitle("");
      setCustomURL("");
      setSelectedOptions([]);
      alert("New Shortcut Added!");
    } else {
      alert("Please fill in title and url fields!");
    }
  };

  const handleNewTabClick = (index) => {
    const updatedData = submittedData[index].myURL;
    window.open(`https://${updatedData}`, "_blank");
  };

  const handleDeleteClick = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
    localStorage.setItem("submittedData", JSON.stringify(updatedData));
    console.log("deleted")
  };

  const handleColorChange = e => {
    setColor(e.target.value)
    localStorage.setItem("color", JSON.stringify(color));
  }

  return (
    <div id="" className="">
      <div style={{ backgroundColor: color }}>
        <div className="absolute top-5 right-5 flex bg-gray-300 rounded-full p-3 w-fit justify-end">
          <HiMenu size={20} onClick={handleSettingsClick} />
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-4 items-center justify-center h-screen w-full z-30">
          <div className="contents" id="">
            {submittedData.map((data, index) => (
              <div key={index} className="flex justify-center items-center h-full w-full pointer-events-none shrink ">
                
                <div className=" bg-white rounded-lg max-h-[50%] max-w-[50%] h-1/2 w-1/2 min-h-[50%] min-w-[50%] pointer-events-auto shrink relative flex">
                  <HiXMark className="top-0 left-0 m-2 h-6 w-6 absolute hover:scale-110 hover:fill-red-600" onClick={()=> handleDeleteClick(index)}/>
                  <a id={`${index}`} href={`https://${data.myURL}`} className="flex flex-col h-full w-full">
                    <div className="text-[1vw] font-semibold text-center px-3 pt-2 h-fit"  id={`${index}`}>
                      {data.myTitle}
                    </div>
                    <div className="object-contain h-full w-full  flex flex-col items-center justify-center px-8">
                      <img
                        id={`${index}`}
                        draggable="false"
                        src={data.myImage}
                        className="max-h-full max-w-full overflow-none px-6"
                      />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {submittedData.length + selectedOptions.length < 8 ? (
            <div
              className={`flex justify-center ${
                submittedData.length + selectedOptions.length < 1
                  ? "col-start-1 col-span-4 row-start-1 row-span-2"
                  : ""
              }`}
            >
              <HiPlusCircle size={70} color="dimgray" className="shadow-lg rounded-full border-2 border-gray-500 hover:scale-110 fill-gray-300" onClick={handleMenuClick} />
            </div>
          ) : null}
        </div>

        {isEditorOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[55]">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <div className="align-middle flex">
                <div className=" align-middle" onClick={defaultHandleEditorClick}>
                  <HiXMark size={20} color="black" />
                </div>
                <div className="flex items-center align-middle">
                  <div className="flex-grow text-center text-xl font-bold select-none">
                    Edit Shortcut
                  </div>
                </div>
              </div>
              <form method="post" onSubmit={handleMultiSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-1">
                  <p className="text-lg font-semibold select-none">Title:</p>
                  <p className="text-lg font-semibold select-none">URL:</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="myTitle"
                    placeholder="Example"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                  />
                  <input
                    name="myURL"
                    type="url"
                    placeholder="www.example.com"
                    spellCheck="false"
                    className="invalid:border-pink-500 invalid:text-pink-600 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
                    pattern={`.\.*\..*`}
                    value={customURL}
                    title="www.example.com"
                    onChange={(e) => setCustomURL(e.target.value)}
                  />
                </div>
                <div className="flex justify-end mt-2">
                  <button
                    className="text-md font-semibold border border-black p-1 rounded-md mr-2"
                    onClick={defaultHandleEditorClick}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-md font-semibold border border-black p-1 rounded-md"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isSettingsOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md z-[56] h-[50%] w-[50%]">
              <div className="align-middle flex flex-row justify-center relative pb-2 border-b-2 border-black border-opacity-50 border-dashed">
                <HiXMark size={20} color="black" className="hover:scale-110 hover:fill-red-600 h-8 w-8 mt-2 absolute top-0 left-0" onClick={handleSettingsClick}/>
                <div className="w-full font-bold items-center align-middle select-none text-xl text-center mt-2">
                  Add a Shortcut
                </div>
              </div>
              <br className=""/>
              <div className="flex flex-row justify-center mx-2 mt-1 border-slate-500 p-3 gap-4 w-full">
                <label className="flex flex-col justify-center text-center bg-gray text-lg font-semibold">Click to Change Background: </label>
                <input
                  value={color}
                  onChange={(e) => handleColorChange(e)}
                  type="color"
                  className="h-8 w-8 border-2 border-black border-opacity-50 rounded-md shadow-md"
                />
                
              </div>
            </div>
          </div>
        )}

        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md z-[57]">
              <div className="-mb-7 absolute" onClick={handleMenuClick}>
                <HiXMark size={20} color="black" />
              </div>
              <div className="flex items-center mb-1 -mt-1">
                <div className="flex-grow text-center text-xl font-bold select-none">
                  Add a Shortcut
                </div>
              </div>

              <div className="mx-2 mt-1">
                <form method="post" onSubmit={(e) => handleSingleSubmit(e)}>
                  <div className="grid grid-cols-2 gap-4 mb-1">
                    <p className="text-lg font-semibold select-none">Title:</p>
                    <p className="text-lg font-semibold select-none">URL:</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="myTitle"
                      placeholder="Example"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
                      value={customTitle}
                      required
                      onChange={(e) => setCustomTitle(e.target.value)}
                    />
                    <input
                      name="myURL"
                      type="url"
                      placeholder="www.example.com"
                      spellCheck="false"
                      required
                      className={`mt-1 block w-full px-3 py-2 bg-white border-2  rounded-md text-sm shadow-sm placeholder-slate-400  
                        ${customURL === "" ? "border-opacity-0" : " border-opacity-50 border-slate-300 invalid:border-red-600 invalid:border-2 invalid:text-red-800"}`}
                      value={customURL}
                      onChange={(e) => setCustomURL(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-row justify-center">
                    <button type="submit"  className="mt-4 p-2 border-2 border-black border-opacity-50 rounded-md font-semibold bg-gray-400 hover:bg-gray-600 hover:text-white">Add Custom Shortcut</button>
                  </div>
                  <hr className="h-px my-4 bg-gray-900 border-0 " />

                  <p className="flex justify-center text-lg font-semibold select-none">
                    Popular Websites
                  </p>
                  <div className="grid grid-cols-3 overflow-y-scroll overscroll-none h-30">
                    <OptionTile
                      title="Google"
                      url="www.google.com"
                      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png?20230822192911"
                      selectedOptions={selectedOptions}
                      handleOptionClick={handleOptionClick}
                    />
                    <OptionTile
                      title="Facebook"
                      url="www.Facebook.com"
                      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png"
                      selectedOptions={selectedOptions}
                      handleOptionClick={handleOptionClick}
                    />
                    <OptionTile
                      title="YouTube"
                      url="www.YouTube.com"
                      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png"
                      selectedOptions={selectedOptions}
                      handleOptionClick={handleOptionClick}
                    />
                    <OptionTile
                      title="LinkedIn"
                      url="www.LinkedIn.com"
                      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/640px-Linkedin_icon.svg.png"
                      selectedOptions={selectedOptions}
                      handleOptionClick={handleOptionClick}
                    />
                    <OptionTile
                      title="Netflix"
                      url="www.Netflix.com"
                      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/640px-Netflix_icon.svg.png"
                      selectedOptions={selectedOptions}
                      handleOptionClick={handleOptionClick}
                    />
                    <OptionTile
                      title="Gmail"
                      url="mail.google.com/mail/u/0/"
                      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                      selectedOptions={selectedOptions}
                      handleOptionClick={handleOptionClick}
                    />
                  </div>

                  <div className="flex justify-end mt-2">
                    <button
                      className="text-md font-semibold border border-black p-1 rounded-md mr-2 bg-red-600 bg-opacity-50 hover:bg-red-800 hover:text-white"
                      onClick={handleMenuClick}
                    >
                      Cancel
                    </button>
                    <button
                      className="text-md font-semibold border border-black p-1 rounded-md bg-green-600 bg-opacity-50 hover:bg-green-800 hover:text-white"
                      onClick={handleMultiSubmit}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
