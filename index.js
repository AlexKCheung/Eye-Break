// timer for eye break

// get minutes to set timer
document.getElementById('start').onclick = function() {
    var timer = (parseInt(document.getElementById('minutes').value) * 60)
}

// alarm info
let alarmInfo = {
//    specific time to fire alarm
//    when: Date.now() + timer
    // delay X minutes then fire alarm
    delayInMinutes: 0.1,
    // fire alarm every 60 minutes 
    periodInMinutes: 0.1
}

// notification info
let notificationInfo = {
    type: "basic", 
    title: 'Notification',
    message: 'Time for an eye break!',
    iconUrl: 'icon_128.png'

}

// if start button is clicked
document.getElementById('start').onclick = function() {
    // create the alarm
    chrome.alarms.create("my alarm", alarmInfo);

    // firing the alarm
    chrome.alarms.onAlarm.addListener(onAlarm);

}

// if reset button is clicked close the alarm
document.getElementById('reset').onclick = function() {
    // clear the alarm
    chrome.alarms.clear("my alarm");

    // console log
    console.log("Alarm Stopped!");

    // close notification ? 

}


function onAlarm(alarm) {
    // console log 
    console.log("Alarm Fired!", alarm)

    chrome.notifications.create("notification", notificationInfo)
}
