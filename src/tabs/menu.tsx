import React, { useEffect, useState } from "react";
import { HiPlusCircle, HiXMark } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";
import "../assets/tailwind.css";
import MyCustomContextMenu from "./mycustomcontextmenu";
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
  const [color, setColor] = useState("#374151");


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

  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const clickedDiv = event.target as HTMLDivElement;
    const key = clickedDiv.getAttribute("id");

    if (key !== null) {
      const index = parseInt(key);
      setClickedKey(index);
    }
    const xPos = event.pageX + "px";
    const yPos = event.pageY + "px";
  });

  const handleNewTabClick = (index) => {
    const updatedData = submittedData[index].myURL;
    window.open(`https://${updatedData}`, "_blank");
  };

  const handleDeleteClick = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
    localStorage.setItem("submittedData", JSON.stringify(updatedData));
  };

  const handleColorChange = e => {
    setColor(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <MyCustomContextMenu
          targetId="customContextmenuArea1"
          options={[
            { label: "Edit", onClick: () => handleEditorClick(clickedKey) },
            { label: "Delete", onClick: () => handleDeleteClick(clickedKey) },
            { label: "Open in new tab", onClick: () => handleNewTabClick(clickedKey) },
          ]}
          className1="cursor-pointer"
        />
        <div className="absolute top-5 right-5 flex bg-gray-300 rounded-full p-3 w-fit justify-end">
          <HiMenu size={20} onClick={handleSettingsClick} />
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-4 items-center justify-center h-screen w-full">
          <div className="contents" id="customContextmenuArea1">
            {submittedData.map((data, index) => (
              <div key={index} className="flex justify-center items-center h-full w-full">
                <div className=" bg-white rounded-lg w-1/2 h-1/2">
                  <a id={`${index}`} href={`https://${data.myURL}`} className="block h-full relative">
                    <div className="text-[1vw] font-semibold text-center absolute top-0 left-0 w-full flex justify-center pt-3"  id={`${index}`}>
                      {data.myTitle}
                    </div>
                    <div id={`${index}`} className="flex justify-center items-center h-full pt-8">
                      <img
                        draggable="false"
                        src={data.myImage}
                        className="p-5 h-auto max-h-full"
                        id={`${index}`}
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
              <HiPlusCircle size={70} color="dimgray" onClick={handleMenuClick} />
            </div>
          ) : null}
        </div>

        {isEditorOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
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
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <div className="align-middle flex">
                <div className=" align-middle" onClick={handleSettingsClick}>
                  <HiXMark size={20} color="black" />
                </div>
                <div className="flex items-center align-middle">
                  <div className="flex-grow text-center text-xl font-bold select-none">
                    Add a Shortcut
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start mx-2 mt-1 border border-slate-500 w-fit p-3 ">
                <div className="flex bg-gray justify-start">Fart</div>
                <div className="bg-gray justify-start">Fart</div>
              </div>
              <label>
                <input
                  value={color}
                  onChange={(e) => handleColorChange(e)}
                  type="color"
                />
              </label>
            </div>
          </div>
        )}

        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <div className="-mb-7 absolute" onClick={handleMenuClick}>
                <HiXMark size={20} color="black" />
              </div>
              <div className="flex items-center mb-1 -mt-1">
                <div className="flex-grow text-center text-xl font-bold select-none">
                  Add a Shortcut
                </div>
              </div>

              <div className="mx-2 mt-1">
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
                      value={customURL}
                      onChange={(e) => setCustomURL(e.target.value)}
                    />
                  </div>

                  <hr className="h-px my-4 bg-gray-900 border-0 " />

                  <p className="flex justify-center text-lg font-semibold select-none">
                    Popular Websites
                  </p>
                  <div className="grid grid-cols-3 overflow-y-scroll overscroll-none h-30">
                    <OptionTile
                      title="Google"
                      url="www.google.com"
                      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
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
                      className="text-md font-semibold border border-black p-1 rounded-md mr-2"
                      onClick={handleMenuClick}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
