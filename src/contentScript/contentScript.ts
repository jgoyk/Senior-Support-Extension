const toggleSwitch = document.querySelector<HTMLInputElement>('input[type="checkbox"]');
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', function() {
        chrome.runtime.sendMessage({toggleState: toggleSwitch.checked});
    });
}

chrome.runtime.sendMessage({toggleState: toggleSwitch.checked}, function(response) {
    if(chrome.runtime.lastError){
      console.error(chrome.runtime.lastError);
    }
    else{
      console.log("Message sent successfully: ", response);
    }
  });
