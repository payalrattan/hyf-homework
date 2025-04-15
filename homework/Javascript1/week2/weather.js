function wearWhat(temperature)
{
const clothes = (temperature>25)?"Skirt or frock":(temperature>15)?"jeans and T-shirt":(temperature>10)?"Jacket and legging":"Winter coat, scarf, boots and gloves";
return clothes;
}
const clothesToWear = wearWhat(13);
console.log("You should wear"+" "+clothesToWear);
