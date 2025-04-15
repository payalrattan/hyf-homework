const boughtCandyPrices = [];
function addCandy(candyType,weight)
{
    let pricePergram;
    switch(candyType)
    {
        case "sweet":pricePergram=0.5; break;
        case "chocolate": pricePergram = 0.7; break;
        case "toffee": pricePergram = 1.1; break;
        case "chewing-gum": pricePergram = 0.03; break;
        default:
            console.log("Type of candy not found");
            return;
    }
    const toatlprice = pricePergram*weight;
    boughtCandyPrices.push(toatlprice);
    console.log(boughtCandyPrices);
}
const amountToSpend=(Math.random())*100;
let  totalSpent = 0;
function canBuyMoreCandy()
{
    let totalSpent = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalSpent += boughtCandyPrices[i];
    }
    console.log("Total spent:" +totalSpent);
    console.log("Amount to spend:"+ amountToSpend);
    const amountLeft = amountToSpend-totalSpent;
    console.log("Remaining balance is "+amountLeft);
     return totalSpent<amountToSpend;
}
addCandy("sweet",6);
addCandy("chocolate",5);
addCandy("toffee",8);
addCandy("chewing-gum",10);
console.log(canBuyMoreCandy() ? "You can buy more, so please do!" : "Enough candy for you!");