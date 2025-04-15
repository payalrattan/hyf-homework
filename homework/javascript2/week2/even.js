// const numbers =[1,2,3,4,5,6,7,8];
// const newNums =[];
// for(let i=0;i<numbers.length;i++)
// {
//     if(numbers[i]%2==0)
//     {
//         newNums[i]=numbers[i]*2;
//     }
// }
// console.log(newNums);

//using map

const mapNumbers =[2,3,4,5,6,7,8,9];
const newNumbers = mapNumbers.filter(number=>number%2==0).map(number=>number*2);

console.log(newNumbers);




