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

/***/ "./src/tabs/magnifier.tsx":
/*!********************************!*\
  !*** ./src/tabs/magnifier.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Magnifier = ({ children }) => {
    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const scale = 1.5;
    const radius = 100;
    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    };
    const handleMouseLeave = () => {
        setMousePosition(null);
    };
    const adjustedX = mousePosition ? mousePosition.x - mousePosition.x * scale : 0;
    const adjustedY = mousePosition ? mousePosition.y - mousePosition.y * scale : 0;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative w-full", onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave },
        children,
        mousePosition && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", style: {
                clipPath: `circle(${radius}px at ${mousePosition.x}px ${mousePosition.y}px)`,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute inset-0", style: {
                    transform: `scale(${scale})`,
                    transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                    left: `${adjustedX}px`,
                    top: `${adjustedY}px`,
                } }, children)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Magnifier);


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
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/hi2 */ "./node_modules/react-icons/hi2/index.esm.js");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");
/* harmony import */ var _mycustomcontextmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mycustomcontextmenu */ "./src/tabs/mycustomcontextmenu.tsx");
/* harmony import */ var _popweb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popweb */ "./src/tabs/popweb.tsx");






const Menu = () => {
    const [clickedKey, setClickedKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isMenuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isEditorOpen, setEditorOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isSettingsOpen, setSettingsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [submittedData, setSubmittedData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [customTitle, setCustomTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [customURL, setCustomURL] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#374151");
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
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        const clickedDiv = event.target;
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
        setColor(e.target.value);
        console.log(e.target.value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { backgroundColor: color } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mycustomcontextmenu__WEBPACK_IMPORTED_MODULE_2__["default"], { targetId: "customContextmenuArea1", options: [
                    { label: "Edit", onClick: () => handleEditorClick(clickedKey) },
                    { label: "Delete", onClick: () => handleDeleteClick(clickedKey) },
                    { label: "Open in new tab", onClick: () => handleNewTabClick(clickedKey) },
                ], className1: "cursor-pointer" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute top-5 right-5 flex bg-gray-300 rounded-full p-3 w-fit justify-end" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiMenu, { size: 20, onClick: handleSettingsClick })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-4 grid-rows-2 gap-4 items-center justify-center h-screen w-full" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "contents", id: "customContextmenuArea1" }, submittedData.map((data, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: "flex justify-center items-center h-full w-full" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " bg-white rounded-lg w-1/2 h-1/2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { id: `${index}`, href: `https://${data.myURL}`, className: "block h-full relative" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-[1vw] font-semibold text-center absolute top-0 left-0 w-full flex justify-center pt-3", id: `${index}` }, data.myTitle),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: `${index}`, className: "flex justify-center items-center h-full pt-8" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { draggable: "false", src: data.myImage, className: "p-5 h-auto max-h-full", id: `${index}` })))))))),
                submittedData.length + selectedOptions.length < 8 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `flex justify-center ${submittedData.length + selectedOptions.length < 1
                        ? "col-start-1 col-span-4 row-start-1 row-span-2"
                        : ""}` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_5__.HiPlusCircle, { size: 70, color: "dimgray", onClick: handleMenuClick }))) : null),
            isEditorOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-200 p-4 rounded-lg shadow-md" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "align-middle flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " align-middle", onClick: defaultHandleEditorClick },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_5__.HiXMark, { size: 20, color: "black" })),
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
            isSettingsOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-200 p-4 rounded-lg shadow-md" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "align-middle flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " align-middle", onClick: handleSettingsClick },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_5__.HiXMark, { size: 20, color: "black" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center align-middle" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-grow text-center text-xl font-bold select-none" }, "Add a Shortcut"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start mx-2 mt-1 border border-slate-500 w-fit p-3 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex bg-gray justify-start" }, "Fart"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray justify-start" }, "Fart")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { value: color, onChange: (e) => handleColorChange(e), type: "color" }))))),
            isMenuOpen && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-200 p-4 rounded-lg shadow-md" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mb-7 absolute", onClick: handleMenuClick },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi2__WEBPACK_IMPORTED_MODULE_5__.HiXMark, { size: 20, color: "black" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center mb-1 -mt-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex-grow text-center text-xl font-bold select-none" }, "Add a Shortcut")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-2 mt-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { method: "post", onSubmit: handleMultiSubmit },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-2 gap-4 mb-1" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-lg font-semibold select-none" }, "Title:"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-lg font-semibold select-none" }, "URL:")),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-2 gap-4" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { name: "myTitle", placeholder: "Example", className: "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400", value: customTitle, onChange: (e) => setCustomTitle(e.target.value) }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { name: "myURL", type: "url", placeholder: "www.example.com", spellCheck: "false", className: "invalid:border-pink-500 invalid:text-pink-600 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400", value: customURL, onChange: (e) => setCustomURL(e.target.value) })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: "h-px my-4 bg-gray-900 border-0 " }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "flex justify-center text-lg font-semibold select-none" }, "Popular Websites"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-3 overflow-y-scroll overscroll-none h-30" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Google", url: "www.google.com", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Facebook", url: "www.Facebook.com", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "YouTube", url: "www.YouTube.com", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "LinkedIn", url: "www.LinkedIn.com", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/640px-Linkedin_icon.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Netflix", url: "www.Netflix.com", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/640px-Netflix_icon.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popweb__WEBPACK_IMPORTED_MODULE_3__["default"], { title: "Gmail", url: "mail.google.com/mail/u/0/", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png", selectedOptions: selectedOptions, handleOptionClick: handleOptionClick })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-end mt-2" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "text-md font-semibold border border-black p-1 rounded-md mr-2", onClick: handleMenuClick }, "Cancel"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "text-md font-semibold border border-black p-1 rounded-md", type: "submit" }, "Save"))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ "./src/tabs/mycustomcontextmenu.tsx":
/*!******************************************!*\
  !*** ./src/tabs/mycustomcontextmenu.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");


const MyCustomContextMenu = ({ targetId, options, className1 }) => {
    const [contextData, setContextData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ visible: false, posX: 0, posY: 0 });
    const contextRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const contextMenuEventHandler = (event) => {
            const targetElement = document.getElementById(targetId);
            if (targetElement && targetElement.contains(event.target)) {
                event.preventDefault();
                setContextData((prevData) => (Object.assign(Object.assign({}, prevData), { visible: true, posX: event.clientX, posY: event.clientY })));
            }
            else if (contextRef.current && !contextRef.current.contains(event.target)) {
                setContextData((prevData) => (Object.assign(Object.assign({}, prevData), { visible: false })));
            }
        };
        const offClickHandler = (event) => {
            if (contextRef.current && !contextRef.current.contains(event.target)) {
                setContextData((prevData) => (Object.assign(Object.assign({}, prevData), { visible: false })));
            }
        };
        document.addEventListener('contextmenu', contextMenuEventHandler);
        document.addEventListener('click', offClickHandler);
        return () => {
            document.removeEventListener('contextmenu', contextMenuEventHandler);
            document.removeEventListener('click', offClickHandler);
        };
    }, [targetId]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
        setContextData((prevData) => {
            var _a, _b, _c, _d;
            let newData = Object.assign({}, prevData);
            if (newData.posX + ((_a = contextRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) > window.innerWidth) {
                newData.posX = newData.posX - ((_b = contextRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth);
            }
            if (newData.posY + ((_c = contextRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight) > window.innerHeight) {
                newData.posY = newData.posY - ((_d = contextRef.current) === null || _d === void 0 ? void 0 : _d.offsetHeight);
            }
            return newData;
        });
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: contextRef, className: 'flex flex-col justify-center align-center absolute h-auto w-fit', style: { display: contextData.visible ? 'block' : 'none', left: contextData.posX, top: contextData.posY } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `rounded-md bg-gray-400 ${className1}` }, options.map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: option.label, className: "p-2 bg-gray-400 hover:bg-gray-600" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: ` ${className1}`, onClick: () => {
                    option.onClick();
                } }, option.label)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCustomContextMenu);


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
            ? "border-2 border-blue-600 bg-gray-300 p-2 m-2 w-50 flex items-center justify-center rounded-md cursor-pointer flex-col"
            : "bg-white p-2 m-2 border border-black w-50 flex items-center justify-center rounded-md cursor-pointer flex-col"}`, onClick: () => handleOptionClick(title, url, imageUrl) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "p-2 font-semibold select-none" }, title),
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
/* harmony import */ var _magnifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./magnifier */ "./src/tabs/magnifier.tsx");




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
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_magnifier__WEBPACK_IMPORTED_MODULE_3__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "h-screen w-screen bg-gray-700 flex" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "customContextmenuArea2", className: "flex-1 overflow-hidden m-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
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