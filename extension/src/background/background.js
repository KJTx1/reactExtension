console.log("Running in background.js");

// var login = false;

// function checkLogin () {
//     if (!login) {
//         window.open('http://www.google.com/','_newtab');
        
//         login = true;
//     } else {
//         // chrome.tabs.create({url:"popup.html"});
//         window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");
//     }   
// }

// chrome.browserAction.onClicked.addListener(checkLogin);

chrome.runtime.onInstalled.addListener(function() {
    alert('You are one click away!\nWe will now redirect you to CodeBreakers sign up page.');

    chrome.tabs.create({
        url: 'http://www.google.com/',
        active: true
    });

    return false;
});

chrome.runtime.onInstalled.addListener(function() {
    let value = "on";
    chrome.storage.local.set({state: value});
});

chrome.runtime.setUninstallURL("https://codebreakersacademy.com/");