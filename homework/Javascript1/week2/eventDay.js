const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function getEventWeekday(dayfromtoday)
{
const today = new Date().getDay();
console.log(today);
dayfromtoday = weekDays[(today + dayfromtoday)%7];
console.log(dayfromtoday);
return dayfromtoday;
}
console.log("Event will be held on "+getEventWeekday(1));
