/*
 * `Shopping Spree`
 * 
 * You went shopping to buy cakes and donuts with X tk (the currency of Bangladesh).
 * First, you bought one cake for A tk at a cake shop.
 * Then, with the money you had left, you bought as many donuts as possible for B tk each, at a donut shop.
 * How much do you have left after all your shopping?
 */
 

function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {

    const moneyAfterCakeCost = totalMoney - cakeCost;

    if (donutCost <= 0 || moneyAfterCakeCost < 0) {
        return moneyAfterCakeCost;
    }

    const remainingMoney = moneyAfterCakeCost % donutCost;

    return remainingMoney;
}


console.log(calculateRemainingMoney(100, 20, 10))           // 0
console.log(calculateRemainingMoney(50, 30, 7))             // 6
console.log(calculateRemainingMoney(50, 30, 0))             // 20
