const code = `
var s = document.createElement("script");
s.setAttribute("src","https://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js");
s.onload = function(){
    setInterval(function(){
        document.querySelector('a[action-type="feed_list_delete"]').click();
        document.querySelector('a[action-type="ok"]').click();
    }, 800);
}
document.head.appendChild(s);
`;

chrome.tabs.executeScript(null, { code });
