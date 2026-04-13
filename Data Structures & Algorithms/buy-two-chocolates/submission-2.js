class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        let min1 = Infinity, min2 = Infinity;

        for(let price of prices) {
            if(price < min1) { 
                min2 = min1;
                min1 = price;
            }
            else if(price < min2) min2 = price;
        }

        return min1 + min2 > money ? money : money - (min1 + min2);
    }
}
