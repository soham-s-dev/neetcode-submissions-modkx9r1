class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        prices.sort((a, b) => a - b);

        return money >= prices[0] + prices[1] ? money - (prices[0] + prices[1]) : money;
    }
}
