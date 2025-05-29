const args = process.argv.slice(2);
let sum = 0;
let count = 0;

for (let arg of args) {
  let num = Number(arg);
  if (isNaN(num)) {
    console.log("Please provide only numeric values.");
    process.exit(1);
  }
  sum += num;
  count++;
}

if (count === 0) {
  console.log("Please provide at least one number.");
  process.exit(1);
}
else{
console.log(sum / count);
}