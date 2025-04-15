function travelDuration({ speed, destinationDistance }) {
    const totalTime = destinationDistance / speed;
    console.log(totalTime);
    const hours = Math.floor(totalTime);
    console.log("Getting time in hours" + " " + hours + "hours");
    const minutes = ((totalTime - hours) * 60);
    console.log(minutes);
    const exactMinutes = Math.round(minutes);
    return hours + "hours and" + " " + exactMinutes + "minutes";
}
const travelInformation1 = { speed: 200, destinationDistance: 1500 };
const travelInformation2 = { speed: 300, destinationDistance: 3500 };
const journeyTime1 = travelDuration(travelInformation1);
const journeyTime2 = travelDuration(travelInformation2);
console.log(journeyTime1);
console.log(journeyTime2);
