var dbName = 'todos-vanillajs';

/*
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('break.html', {
        id: 'main', 
        bounds: {
            width: 620, 
            height 500
        }
    });
});
*/
function launch() {
    chrome.app.window.create('break.html', {
        id: 'main', 
        bounds: {
            width: 620, 
            height 500
        }
    });
}

chrome.app.runtime.onLaunched.addListener(launch);
/*
chrome.alarms.onAlarm.addListener(function(alarm) {
    console.log("Got an alarm!", alarm);
})
*/

