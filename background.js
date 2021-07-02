// chrome.app.runtime.onLaunched.addListener(launch);
/*
chrome.alarms.onAlarm.addListener(function(alarm) {
    console.log("Got an alarm!", alarm);
})
*/

// firing the alarm
chrome.alarms.onAlarm.addListener(onAlarm);
function onAlarm(alarm) {
    // console log 
    console.log("Alarm Fired!", alarm)

    chrome.notifications.create("notification", notificationInfo)
}
// notification info
let notificationInfo = {
    type: "basic", 
    title: 'Notification',
    message: 'Time for an eye break!',
    iconUrl: '/Images/icon_128.png'

}
//chrome.action.onClicked.addListener(opentime);
/*
function opentime() {
    console.log("background.js activated?")
    chrome.tabs.create({url: 'index.html'});
}
*/
