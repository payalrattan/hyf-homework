//peter's Housey pricey
const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight = 10;
const peterHouseGardenSize = 100;
const peterPaidPrice = 2500000;

//Julia's Housey pricey

const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaHouseGardenSize = 70;
const juliaPaidPrice = 1000000;

const peterHousevolumeInMeters = peterHouseWidth * peterHouseDepth * peterHouseHeight;
const peterExpectedhousePrice = peterHousevolumeInMeters * 2.5 * 1000 + peterHouseGardenSize * 300;

const juliaHousevolumeInMeters = juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;
const juliaExpectedhousePrice = juliaHousevolumeInMeters * 2.5 * 1000 + juliaHouseGardenSize * 300;

console.log("Peter's expected house price: " + peterExpectedhousePrice);
console.log("Julia's expected house price: " + juliaExpectedhousePrice);

if (peterPaidPrice > peterExpectedhousePrice) {
    console.log("Peter is paying too  much");
}
else {
    console.log("Peter is paying less amount");
}

if (juliaPaidPrice > juliaExpectedhousePrice) {
    console.log("julia is paying too  much");
}
else {
    console.log("julia is paying less amount");
} 