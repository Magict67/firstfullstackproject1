/*function openOrFocusTab(url, tabName) {
  var tab = window.open(url, tabName);
  tab.focus();
}*/
//Just learned the asterics thing//

function openOrFocusTab(url, name) {
    // tabname or tab is same thing
    const existingWindow = window.open('', name);
    // is or not new window created.
    if (existingWindow && existingWindow.location.href !== 'about:blank') {
        // its there, focus on.
        existingWindow.focus();
        
        // if URL different, update URL Hmmmmmm.
        if (existingWindow.location.href !== url) {
            existingWindow.location.href = url;
        }
    } else {
        // window with name not exist, open new one.
        window.open(url, name);
    }
}
