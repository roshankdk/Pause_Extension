// Function to handle tab activation (when switching between tabs)
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      // Send message to play video when entering the tab
      chrome.tabs.sendMessage(tab.id, { action: "playVideo" });
    }
  }); 

  // Pause videos on all other YouTube tabs
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.url && tab.url.includes("youtube.com/watch") && tab.id !== activeInfo.tabId) {
        chrome.tabs.sendMessage(tab.id, { action: "pauseVideo" });
      }
    });
  });
});

// Function to handle window focus change (minimize and restore window)
chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // Pause videos on all YouTube tabs when window is not focused
    chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, { action: "pauseVideo" });
      });
    });
  } else {
    // Play video on active YouTube tab when window is focused
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].url.includes("youtube.com/watch")) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "playVideo" });
      }
    });
  }
});
