let script = document.createElement('script');
script.src = chrome.runtime.getURL('magnifier.js');
(document.head || document.documentElement).appendChild(script);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "TOGGLE_MAGNIFIER") {
    if (request.data.isEnabled) {
      let event = new Event('activateMagnifier');
      document.dispatchEvent(event);
    } else {
      let event = new Event('deactivateMagnifier');
      document.dispatchEvent(event);
    }
  }
});

