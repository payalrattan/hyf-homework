const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Please provide at least one number.");
  process.exit(1);
}
let sum = 0;

for (const arg of args) {
  const num = Number(arg);
  if (isNaN(num)) {
    console.log("Please provide only numeric values.");
    process.exit(1);
  }
  sum += num;
}

const average = sum / args.length;
console.log(average);