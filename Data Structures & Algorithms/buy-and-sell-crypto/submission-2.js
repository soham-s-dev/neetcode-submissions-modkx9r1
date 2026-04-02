class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minBuy = prices[0];

        for(let price of prices) {
            maxProfit = Math.max(maxProfit, price - minBuy);
            minBuy = Math.min(price, minBuy);
        }

        return maxProfit;
    }
}
