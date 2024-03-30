
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    chrome.storage.local.set({pageData: message.data}, function() {
        console.log('Data saved:', message.data);
    });
});

console.log('BG');
