document.getElementById("ahegaoButton").addEventListener("click", changeImage);

function changeImage() {
    
    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {

        let msg = {
            txt : "hello"
        }
    
        console.log("mess send");
        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
}