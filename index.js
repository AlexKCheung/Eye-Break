// timer for eye break
// get minutes to set timer
document.getElementById('start').onclick = function() {
    var timer = parseFloat(document.getElementById('minutes').value)

    // alarm info
    let alarmInfo = {
        //    specific time to fire alarm
        //    when: Date.now() + timer
            // delay X minutes then fire alarm
            delayInMinutes: timer,
            // fire alarm every interval minutes 
            periodInMinutes: timer
        }

    // create the alarm
    chrome.alarms.create("my alarm", alarmInfo);
}

function onAlarm(alarm) {
    // console log 
    console.log("Alarm Fired!", alarm)

    chrome.notifications.create("notification", notificationInfo)
}

// if reset button is clicked close the alarm
document.getElementById('reset').onclick = function() {
    // clear the alarm
    chrome.alarms.clear("my alarm");

    // console log
    console.log("Alarm Stopped!");

    // close notification ? 

}

