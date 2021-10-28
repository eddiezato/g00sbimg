chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        "id": "g00iscm1",
        "title": "Search by image",
        "contexts": ["image"]
    });
});

chrome.contextMenus.onClicked.addListener(function(contextInfo, tab) {
    var url_encoded_url = encodeURIComponent(contextInfo.srcUrl);
    var newURL = "https://www.google.com/searchbyimage?image_url=" + url_encoded_url;
    chrome.tabs.create({
        active: false,
        url: newURL
    });
});