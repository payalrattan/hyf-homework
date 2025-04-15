const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = false;
let dogFutureAge = dogYearFuture - dogYearOfBirth;
let yearType;
if (shouldShowResultInDogYears) {
    dogFutureAge *= 7;
    yearType = "dog years";
}
else {
    dogFutureAge = dogFutureAge;
    yearType = "human years";

}
console.log("Your dog will be" + " " + dogFutureAge + " " + yearType + " " + " old in " + dogYearFuture);
