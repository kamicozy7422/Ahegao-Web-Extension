console.log("Extension Online");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    chrome.storage.sync.set({isClicked: true}, function() {
        console.log("Is the button clicked?");
    });

    chrome.storage.sync.get(['key'], function(result) {
        console.log('Is the button clicked' + result.value);
    });
}

// function gotMessage(message, sender, sendResponse) {
//     console.log(message.txt);
//     if (message.txt === "hello") {
//         let images = document.getElementsByTagName('img');
//         console.log("mess receive");
//         for (elt of images) {
//             elt.src = "https://qphs.fs.quoracdn.net/main-qimg-07c9f323ffd4bb0623ff41dad473f8e5";    
//         }
//     }
// }