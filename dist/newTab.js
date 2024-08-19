/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tabs/index.tsx":
/*!****************************!*\
  !*** ./src/tabs/index.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ "./src/tabs/tabs.tsx");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");




function init() {
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appContainer);
    root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tabs__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
init();


/***/ }),

/***/ "./src/tabs/menu.tsx":
/*!***************************!*\
  !*** ./src/tabs/menu.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi2 */ "./node_modules/react-icons/hi2/index.esm.js");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");
/* harmony import */ var _popweb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popweb */ "./src/tabs/popweb.tsx");





const Menu = () => {
    const [clickedKey, setClickedKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isMenuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isEditorOpen, setEditorOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isSettingsOpen, setSettingsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [submittedData, setSubmittedData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [customTitle, setCustomTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [customURL, setCustomURL] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(localStorage.getItem("color")) || "#374151");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
        const optionIndex = selectedOptions.findIndex((option) => option.myTitle === title);
        if (optionIndex === -1) {
            setSelectedOptions([
                ...selectedOptions,
                { myTitle: title, myURL: url, myImage: img },
            ]);
        }
        else {
            const updatedOptions = selectedOptions.filter((option) => option.myTitle !== title);
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
        }
        else {
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
        console.log("deleted");
    };
    const handleColorChange = e => {
        setColor(e.target.value);
        localStorage.setItem("color", JSON.stringify(color));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "", className: "" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { backgroundColor: color } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute top-5 right-5 flex bg-gray-300 rounded-full p-3 w-fit justify-end" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiMenu, { size: 20, onClick: handleSettingsClick })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-4 grid-rows-2 gap-4 items-center justify-center h-screen w-full z-30" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "contents", id: "" }, submittedData.map((data, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: "flex justify-center items-center h-full w-full pointer-events-none shrink " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " bg-white rounded-lg max-h-[50%] max-w-[50%] h-1/2 w-1/2 min-h-[50%] min-w-[50%] pointer-events-auto shrink relative flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__.HiXMark, { className: "top-0 left-0 m-2 h-6 w-6 absolute hover:scale-110 hover:fill-red-600", onClick: () => handleDeleteClick(index) }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { id: `${index}`, href: `https://${data.myURL}`, className: "flex flex-col h-full w-full" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-[1vw] font-semibold text-center px-3 pt-2 h-fit", id: `${index}` }, data.myTitle),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "object-contain h-full w-full  flex flex-col items-center justify-center px-8" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { id: `${index}`, draggable: "false", src: data.myImage, className: "max-h-full max-w-full overflow-none px-6" })))))))),
                submittedData.length + selectedOptions.length < 8 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `flex justify-center ${submittedData.length + selectedOptions.length < 1
                        ? "col-start-1 col-span-4 row-start-1 row-span-2"
                        : ""}` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__.HiPlusCircle, { size: 70, color: "dimgray", className: "shadow-lg rounded-full border-2 border-gray-500 hover:scale-110 fill-gray-300", onClick: handleMenuClick }))) : null),
            isEditorOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[55]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-200 p-4 rounded-lg shadow-md" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "align-middle flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " align-middle", onClick: defaultHandleEditorClick },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__.HiXMark, { size: 20, color: "black" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center align-middle" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-grow text-center text-xl font-bold select-none" }, "Edit Shortcut"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { method: "post", onSubmit: handleMultiSubmit },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-2 gap-4 mb-1" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-lg font-semibold select-none" }, "Title:"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-lg font-semibold select-none" }, "URL:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-2 gap-4" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { name: "myTitle", placeholder: "Example", className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400", value: customTitle, onChange: (e) => setCustomTitle(e.target.value) }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { name: "myURL", type: "url", placeholder: "www.example.com", spellCheck: "false", className: "invalid:border-pink-500 invalid:text-pink-600 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400", pattern: `.\.*\..*`, value: customURL, title: "www.example.com", onChange: (e) => setCustomURL(e.target.value) })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-end mt-2" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "text-md font-semibold border border-black p-1 rounded-md mr-2", onClick: defaultHandleEditorClick }, "Cancel"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "text-md font-semibold border border-black p-1 rounded-md", type: "submit" }, "Save")))))),
            isSettingsOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed top-0 left-0 w-full h-full flex justify-center items-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-200 p-4 rounded-lg shadow-md z-[56] h-[50%] w-[50%]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "align-middle flex flex-row justify-center relative pb-2 border-b-2 border-black border-opacity-50 border-dashed" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__.HiXMark, { size: 20, color: "black", className: "hover:scale-110 hover:fill-red-600 h-8 w-8 mt-2 absolute top-0 left-0", onClick: handleSettingsClick }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full font-bold items-center align-middle select-none text-xl text-center mt-2" }, "Add a Shortcut")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", { className: "" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row justify-center mx-2 mt-1 border-slate-500 p-3 gap-4 w-full" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "flex flex-col justify-center text-center bg-gray text-lg font-semibold" }, "Click to Change Background: "),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { value: color, onChange: (e) => handleColorChange(e), type: "color", className: "h-8 w-8 border-2 border-black border-opacity-50 rounded-md shadow-md" }))))),
            isMenuOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-200 p-4 rounded-lg shadow-md z-[57]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mb-7 absolute", onClick: handleMenuClick },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__.HiXMark, { size: 20, color: "black" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center mb-1 -mt-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-grow text-center text-xl font-bold select-none" }, "Add a Shortcut")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-2 mt-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { method: "post", onSubmit: (e) => handleSingleSubmit(e) },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-2 gap-4 mb-1" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-lg font-semibold select-none" }, "Title:"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-lg font-semibold select-none" }, "URL:")),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-2 gap-4" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { name: "myTitle", placeholder: "Example", className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400", value: customTitle, required: true, onChange: (e) => setCustomTitle(e.target.value) }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { name: "myURL", type: "url", placeholder: "www.example.com", spellCheck: "false", required: true, className: `mt-1 block w-full px-3 py-2 bg-white border-2  rounded-md text-sm shadow-sm placeholder-slate-400  
                        ${customURL === "" ? "border-opacity-0" : " border-opacity-50 border-slate-300 invalid:border-red-600 invalid:border-2 invalid:text-red-800"}`, value: customURL, onChange: (e) => setCustomURL(e.target.value) })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row justify-center" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "submit", className: "mt-4 p-2 border-2 border-black border-opacity-50 rounded-md font-semibold bg-gray-400 hover:bg-gray-600 hover:text-white" }, "Add Custom Shortcut")),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: "h-px my-4 bg-gray-900 border-0 " }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "flex justify-center text-lg font-semibold select-none" }, "Popular Websites"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-3 overflow-y-scroll overscroll-none h-30" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "Google", url: "www.google.com", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png?20230822192911", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "Facebook", url: "www.Facebook.com", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "YouTube", url: "www.YouTube.com", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "LinkedIn", url: "www.LinkedIn.com", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/640px-Linkedin_icon.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "Netflix", url: "www.Netflix.com", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/640px-Netflix_icon.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_2__["default"], { title: "Gmail", url: "mail.google.com/mail/u/0/", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-end mt-2" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "text-md font-semibold border border-black p-1 rounded-md mr-2 bg-red-600 bg-opacity-50 hover:bg-red-800 hover:text-white", onClick: handleMenuClick }, "Cancel"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "text-md font-semibold border border-black p-1 rounded-md bg-green-600 bg-opacity-50 hover:bg-green-800 hover:text-white", onClick: handleMultiSubmit }, "Save"))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ "./src/tabs/popweb.tsx":
/*!*****************************!*\
  !*** ./src/tabs/popweb.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function OptionTile({ title, url, imageUrl, selectedOptions, handleOptionClick }) {
    const isSelected = selectedOptions.some((option) => option.myTitle === title);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `${isSelected
            ? "border-2 text-lg border-blue-600 bg-gray-300 p-4 m-4 w-50 flex flex-col justify-around items-center  rounded-md cursor-pointer relative"
            : "bg-white text-lg p-4 m-4 border-2 border-opacity-50 border-black w-50 flex flex-col justify-around items-center  rounded-md cursor-pointer hover:bg-gray-300 relative"}`, onClick: () => handleOptionClick(title, url, imageUrl) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-2 font-semibold select-none p-1" }, title),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: imageUrl, draggable: "false", height: "50", width: "50", alt: title })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionTile);


/***/ }),

/***/ "./src/tabs/tabs.tsx":
/*!***************************!*\
  !*** ./src/tabs/tabs.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/tabs/menu.tsx");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");



function Tabs() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "h-screen w-screen bg-gray-700 flex" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "", className: "flex-1 overflow-hidden" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"newTab": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkseniorsupportextension"] = self["webpackChunkseniorsupportextension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_react-icons_hi2_index_esm_js-node_modules_react-icons_hi_index_esm_js","src_assets_tailwind_css"], () => (__webpack_require__("./src/tabs/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=newTab.js.map