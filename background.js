chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        name: "menua"
    });
});

// chrome.storage.local.get('name' , data => {
    
// });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && /^http/.test(tab.url)){
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ["./index.js"]
        }).then(() => {
            console.log("Injected foreground into tab.");
        }).catch(err => console.log(err));
    }
})

