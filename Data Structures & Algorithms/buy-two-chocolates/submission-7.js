class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
       let price1 = Infinity, price2 = Infinity;

        for(let price of prices) {
            if(price < price1) {
                price2 = price1;
                price1 = price;
            } else if(price < price2) {
                price2 = price;
            }
        }

        return money >= price1 + price2 ? money - (price1 + price2) : money; 
    }
}
