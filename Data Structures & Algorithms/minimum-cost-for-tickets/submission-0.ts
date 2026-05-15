class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days: number[], costs: number[]): number {
        let n = days.length;
        let dp = new Array(n + 1).fill(0);
        let [cost1, cost7, cost30] = costs;

        for(let i = days.length - 1; i >= 0; i--) {
            let j = i;
            while(j < n && days[j] < days[i] + 1)
                j++;
            let costOne = dp[j] + cost1;

            j = i;
            while(j < n && days[j] < days[i] + 7)
                j++;
            let costSeven = dp[j] + cost7;

            j = i;
            while(j < n && days[j] < days[i] + 30) 
                j++;
            let costThirty = dp[j] + cost30;

            dp[i] = Math.min(costOne, costSeven, costThirty);
        }
        return dp[0];
    }
}
