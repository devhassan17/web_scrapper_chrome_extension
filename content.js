console.log("Content script loaded");

console.log(document.body);

chrome.runtime.sendMessage({data: document.body});
