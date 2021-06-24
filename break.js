// timer for eye break

// get minutes to set timer
document.getElementById('start').onclick = function() {
    var timer = (parseInt(document.getElementById('minutes').value) * 60)
}

// alarm info
let alarmInfo = {}
//    specific time to fire alarm
//    when: Date.now() + timer
    // delay X minutes then fire alarm
//    delayInMinutes: 1,
    // fire alarm every 60 minutes for 10 times

alarmInfo.periodInMinutes = (1);

/* TODO
FIGURE OUT WHAT TO DO FOR ALARMINFO
SHOW NOTIFICATION OR TAB?
RESET TIMER
*/

// create the alarm
chrome.alarms.create("my alarm", alarmInfo);

// firing the alarm
chrome.alarms.onAlarm.addListener(onAlarm);

function onAlarm(alarm) {
    console.log("Alarm Fired", alarm)
}