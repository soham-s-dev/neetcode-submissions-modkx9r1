class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hold = new Array(prices.length).fill(0);
        let sold = new Array(prices.length).fill(0);
        let rest = new Array(prices.length).fill(0);

        hold[0] = -prices[0];
        sold[0] = -Infinity;
        rest[0] = 0;

        for(let i = 1; i < prices.length; i++) {
            hold[i] = Math.max(hold[i - 1], rest[i - 1] - prices[i]);
            sold[i] = hold[i - 1] + prices[i];
            rest[i] = Math.max(sold[i - 1], rest[i - 1]);
        }

        return Math.max(sold[sold.length - 1], rest[rest.length - 1]);
    }
}
