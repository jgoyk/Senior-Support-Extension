chrome.runtime.onInstalled.addListener(()=>{
    console.log('on correct page')
})

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.toggleState !== undefined) {
        console.log("Toggle state is: " + message.toggleState);
    }
});