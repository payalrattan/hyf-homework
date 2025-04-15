
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!
const array = ["Keep", "Remove", "Keep", "Remove", "Keep"];
const filteredArr = array .filter((string,index)=>{
    return index%2===0;
})
console.log(filteredArr);