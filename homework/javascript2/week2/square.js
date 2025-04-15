//Square root or not
function square(numbers)
{
    return numbers.map((number)=>{
        let sqrt = Math.sqrt(number) ;
        return Number.isInteger(sqrt) ? sqrt : number * number;
    })
}
console.log(square([4, 3, 9, 7, 2, 1]));


