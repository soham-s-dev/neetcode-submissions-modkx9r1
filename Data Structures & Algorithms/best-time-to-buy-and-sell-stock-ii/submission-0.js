class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let hold = new Array(prices.length).fill(0);
        let free = new Array(prices.length).fill(0);

        hold[0] = -1 * prices[0];


        for(let i = 1; i < prices.length; i++) {
            hold[i] = Math.max(hold[i - 1], free[i - 1] - prices[i]);
            free[i] = Math.max(free[i - 1], hold[i - 1] + prices[i]);
        }

        return free[hold.length - 1];
    }
}
