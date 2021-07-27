var myDate = new Date()
var myDay = myDate.getUTCDate()
var myMonth = myDate.getMonth()
var myYear = myDate.getFullYear();
var myHour = myDate.getUTCHours();
var myMinute = myDate.getUTCMinutes()
var reader = document.getElementById('time_reader')
reader.innerHTML = `${myDay}/${myMonth}/${myYear} ${myHour}:${myMinute}`