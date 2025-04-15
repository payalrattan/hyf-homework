import { readFileSync } from 'node:fs';
const orderedmeal = readFileSync('./meal.json', 'utf8');

const parsedmeal = JSON.parse(orderedmeal);
console.log(parsedmeal);

const meal = JSON.stringify(parsedmeal);
console.log(meal);

console.log(typeof meal);
console.log(typeof parsedmeal);

const show = parsedmeal.forEach(item => {
    console.log(item.Ordername);

});

const filteredMeal = parsedmeal.filter((id)=>{
    return(id.Orderid>1); 
})

console.log(filteredMeal);






