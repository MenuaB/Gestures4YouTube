chrome.browserAction.onClicked.addListener(function(activeTab){
    chrome.tabs.create({'url': chrome.extension.getURL('notes.html')}, function(tab)
    });
  });